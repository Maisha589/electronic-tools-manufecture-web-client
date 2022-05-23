import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/booking?clientEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user])


    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Tool</th>
                        <th>Quantity</th>
                        <th>Price per tool</th>
                        <th>TotalPrice</th>
                        <th>Make Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td className='font-bold'>{order.displayName}</td>
                            <td>{order.toolsName}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.toolsPrice}</td>
                            <th>{order.TotalPrice}</th>
                            <th><button className="btn btn-xs btn-primary">Pay</button></th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;