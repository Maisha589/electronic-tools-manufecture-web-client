import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingRow from './BookingRow';

const AllOrders = () => {
    const { data: bookings, isLoading } = useQuery("booking", () => fetch("http://localhost:5000/booking", {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => <BookingRow
                            key={booking._id}
                            index={index}
                            booking={booking}
                        ></BookingRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrders;