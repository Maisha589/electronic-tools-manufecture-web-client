import React from 'react';

const UserRow = ({ user, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>user</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;