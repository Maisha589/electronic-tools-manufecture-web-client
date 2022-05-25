import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch, handleDelete }) => {
    const { _id, email, role } = user;

    const handleMakeAdmin = () => {
        fetch(`https://sheltered-garden-62351.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Successfully made an admin")
                    console.log(data)
                }

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role || "client"}</td>
            {
                !role && <>
                    <td><button onClick={handleMakeAdmin} className="btn btn-xs">make Admin</button></td>
                    <td><button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">remove</button></td>
                </>
            }
        </tr>
    );
};

export default UserRow;