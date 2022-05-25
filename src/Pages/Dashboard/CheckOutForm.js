import React, { useEffect, useState } from 'react';
import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckOutForm = ({ tool }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    const { _id, totalPrice } = tool;

    useEffect(() => {
        fetch("https://sheltered-garden-62351.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '');
        setSuccess("");
        setProcessing(true);

        // confirm card Payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: tool.client,
                    email: tool.clientEmail
                }
            }
        })
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed.');
            toast('Congrats! Your payment is completed.');
        }

        // Store Payment
        const payment = {
            tools: _id,
            transactionId: paymentIntent.id
        }
        fetch(`https://sheltered-garden-62351.herokuapp.com/booking/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                setProcessing(false)
                console.log(data)
            })
    };
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">
                        {transactionId}</span> </p>
                </div>
            }
        </form>
    );
};

export default CheckOutForm;