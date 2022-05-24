import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: tools, isLoading } = useQuery("booking", () => fetch(url, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body bg-neutral">
                    <p className="text-primary font-bold text-2xl">Hello {tools.client},</p>
                    <h2 class="card-title">Please Pay for your <span className='text-primary font-bold'>{tools.toolsName}</span> order</h2>
                    <p>It costs {tools.toolsPrice}$ per piece.</p>
                    <p>You purchased {tools.orderQuantity}</p>
                    <p>So, your total is <span className='font-bold text-primary text-2xl'>{tools.TotalPrice}$</span>. Please, confirm by paying early. </p>
                </div>
            </div>
        </div>
    );
};

export default Payment;