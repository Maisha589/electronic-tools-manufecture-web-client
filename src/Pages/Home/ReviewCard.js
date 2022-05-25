import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className="card m-5 bg-secondary text-primary ">
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p>Review: {comment}</p>
                <p>Rating: {rating}/ 5</p>
            </div>
        </div>
    );
};

export default ReviewCard;