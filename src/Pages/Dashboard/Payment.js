import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe("pk_test_51L1MONAr9zsAaSb0luXvkVJmUVehmjjSrO6QJO3zApsoifeoFrujucO6BF52pbUzBk5FQMeRa47f1oiNJOy3hWTj00nrr79eyR");

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/booking/${id}`;
    console.log(url);

    const { data: tool, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body bg-neutral">
                    <p className="text-primary font-bold text-2xl">Hello {tool.client},</p>
                    <h2 className="card-title">Please Pay for your <span className='text-primary font-bold'>{tool.toolsName}</span> order</h2>
                    <p>It costs {tool.toolsPrice}$ per piece.</p>
                    <p>You purchased {tool.orderQuantity}</p>
                    <p>So, your total is <span className='font-bold text-primary text-2xl'>{tool.totalPrice}$</span>. Please, confirm by paying early. </p>
                </div>
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            key={tool._id}
                            tool={tool}
                        ></CheckOutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;