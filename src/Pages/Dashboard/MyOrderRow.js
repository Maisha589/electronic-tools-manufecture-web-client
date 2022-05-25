import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ order, index }) => {
    const { _id, toolsName, clientEmail, orderQuantity, toolsPrice, totalPrice } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td className='font-bold'>{clientEmail}</td>
            <td>{toolsName}</td>
            <td>{orderQuantity}</td>
            <td>{toolsPrice}</td>
            <td>{totalPrice}</td>
            <td>
                {
                    (totalPrice && order.paid) &&
                    <span className='text-success'>paid</span>
                }
                {
                    (totalPrice && !order.paid) &&
                    <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-primary'>pay</button></Link>
                }
            </td>
            {/* <td>
                {
                    order.totalPrice &&
                    <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>PAY</button></Link>
                }
            </td> */}
        </tr>
    );
};

export default MyOrderRow;