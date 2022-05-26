import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const ClientReview = () => {
    const { data: reviews, isLoading } = useQuery("review", () => fetch("https://sheltered-garden-62351.herokuapp.com/review", {
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
        <div className='p-5 mb-5 mt-5 '>
            <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-10 p-5'>Customer Review</h2>
            <div style={{ backgroundImage: "url(https://i.ibb.co/dMHJyxX/21018.jpg)", backgroundSize: "cover" }} className="grid lg:grid-cols-3 sm:grid-cols-2">
                {
                    reviews.slice(-3).reverse().map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default ClientReview;