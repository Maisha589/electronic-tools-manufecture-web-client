import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const ClientReview = () => {
    const { data: reviews, isLoading } = useQuery("review", () => fetch("http://localhost:5000/review", {
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
        <div>
            <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-5 '>Customer Review</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2">
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