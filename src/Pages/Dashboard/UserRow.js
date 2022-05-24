import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email } = user;

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success("Successfully made admin")
                console.log(data)
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>user</td>
            <td><button onClick={handleMakeAdmin} className="btn btn-xs">make Admin</button></td>
        </tr>
    );
};

export default UserRow;