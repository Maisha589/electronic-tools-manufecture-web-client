import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
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

    const handleDelete = id => {
        const proceed = window.confirm("are you sure to delete?")
        if (proceed) {
            console.log("deleting user with ", id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("deleted successfully!");
                        refetch();
                    }
                })
        }
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
                            handleDelete={handleDelete}
                        ></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    )
};

export default AllUsers;