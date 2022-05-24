import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:5000/booking/user?clientEmail=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate("/")
                }
                return res.json()
            })
            .then(data => setOrders(data))

    }, [user, navigate])


    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-5 '>My Orders</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Tool</th>
                        <th>Quantity</th>
                        <th>Price per tool($)</th>
                        <th>TotalPrice ($)</th>
                        <th>Make Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <tr>
                            <td>{index + 1}</td>
                            <td className='font-bold'>{order.clientEmail}</td>
                            <td>{order.toolsName}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.toolsPrice}</td>
                            <td>{order.TotalPrice}</td>
                            <td>
                                {(order.toolsPrice && !order.paid) && <Link className="btn btn-primary btn-sm" to={`/dashboard/payment/${order._id}`}>Pay</Link>}
                                {
                                    (order.TotalPrice && order.paid) && <span>Paid</span>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;