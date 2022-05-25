import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import BookingRow from './BookingRow';

const AllOrders = () => {
    const { data: bookings, isLoading, refetch } = useQuery("booking", () => fetch("https://sheltered-garden-62351.herokuapp.com/booking", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = id => {
        const proceed = window.confirm("are you sure to delete?")
        if (proceed) {
            console.log("deleting tool with ", id)
            const url = `https://sheltered-garden-62351.herokuapp.com/booking/${id}`
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
            <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-5 '>manage All orders</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Client </th>
                        <th className='lg:block sm:hidden'>Client Email</th>
                        <th>Tools name</th>
                        <th>Tool quantity</th>
                        <th className='lg:block sm:hidden'>Tool price</th>
                        <th>Total Price</th>
                        <th>Manage order</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookings.map((booking, index) => <BookingRow
                            key={booking._id}
                            index={index}
                            booking={booking}
                            handleDelete={handleDelete}
                        ></BookingRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;