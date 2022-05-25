import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://sheltered-garden-62351.herokuapp.com/booking/user?clientEmail=${user.email}`, {
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
                        orders.map((order, index) => <MyOrderRow
                            key={order._id}
                            order={order}
                            index={index}
                        ></MyOrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;