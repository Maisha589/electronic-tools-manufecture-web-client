import React from 'react';

const BookingRow = ({ booking, index }) => {
    const { client, clientEmail, toolsName, orderQuantity, TotalPrice, toolsPrice } = booking;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{client}</td>
            <td className='lg:block sm:hidden'>{clientEmail}</td>
            <td>{toolsName}</td>
            <td>{orderQuantity}</td>
            <td className='lg:block sm:hidden'>{toolsPrice}</td>
            <td>{TotalPrice}</td>
            <td><button className="btn btn-xs btn-primary">Deliver</button></td>
            <td><button className="btn btn-xs btn-error">cancel</button></td>
        </tr>
    );
};

export default BookingRow;