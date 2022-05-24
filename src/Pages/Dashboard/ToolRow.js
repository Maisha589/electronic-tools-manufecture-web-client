import React from 'react';

const ToolRow = ({ tool, index }) => {
    const { name, price, available } = tool;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{available}</td>
            <td><button className="btn btn-xs btn-error">remove</button></td>
        </tr>
    );
};

export default ToolRow;