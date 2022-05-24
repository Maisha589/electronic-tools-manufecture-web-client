import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const url = `http://localhost:5000/purchase/${id}`;
    const { data: tool, isLoading } = useQuery("purchase", () => fetch(url, {
        method: "GET",
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const { _id, name, image, description, price, available } = tool;


    const handleBooking = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;

        const booking = {
            toolKey: _id,
            client: event.target.name.value,
            clientEmail: user.email,
            toolsName: name,
            orderQuantity: event.target.quantity.value,
            toolsPrice: price,
            TotalPrice: (price * quantity),
            phone: event.target.phone.value,
            address: event.target.address.value
        }


        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast("successfully booked")
            })
    }


    return (
        <div className="card  p-5 m-5 lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-primary">{name}</h2>
                <p>{description}</p>
                <p className='font-semibold text-primary'>Price Per Piece: <span className='font-bold'>${price}</span></p>
                <p className='font-semibold text-primary'>Available Tools: <span className='font-bolder'>{available}</span></p>

                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center'>
                    <input type="text" name='name' placeholder="your Name" className="input input-bordered input-primary w-full max-w-xs" required />
                    <input type="email" value={user?.email} className="input input-bordered input-primary w-full max-w-xs" readOnly disabled />
                    <input type="number" name='phone' placeholder="Your phone" className="input input-bordered input-primary w-full max-w-xs" required />
                    <input type="text" name='address' placeholder="your address" className="input input-bordered input-primary w-full max-w-xs" required />
                    <input className="input input-bordered input-primary w-full max-w-xs" required type="number" name="quantity" min="1000" max={available} />
                    <input type="submit" value="Book" className="input input-bordered w-full max-w-xs btn btn-primary hover:btn-secondary" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;