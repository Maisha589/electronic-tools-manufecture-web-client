import React from 'react';

const BookingRow = ({ booking, index, handleDelete }) => {
    const { _id, client, clientEmail, toolsName, orderQuantity, totalPrice, toolsPrice, paid } = booking;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{client}</td>
            <td className='lg:block sm:hidden'>{clientEmail}</td>
            <td>{toolsName}</td>
            <td>{orderQuantity}</td>
            <td className='lg:block sm:hidden'>{toolsPrice}</td>
            <td>{totalPrice}</td>
            <td>
                {
                    paid && <button className="btn btn-xs btn-primary">Deliver</button>
                }
                {
                    !paid && <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">cancel</button>
                }
            </td>
        </tr>
    );
};

export default BookingRow;