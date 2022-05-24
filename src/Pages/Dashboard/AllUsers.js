import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery("user", () =>
        fetch("http://localhost:5000/user", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-5 '>manage users</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Role</th>
                        <th>Manage button</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <UserRow
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    )
};

export default AllUsers;