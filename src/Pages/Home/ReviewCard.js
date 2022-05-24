import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div class="card m-5 bg-secondary text-primary ">
            <div class="card-body">
                <h2 class="card-title font-bold">{name}</h2>
                <p>Review: {comment}</p>
                <p>Rating: {rating}/ 5</p>
            </div>
        </div>
    );
};

export default ReviewCard;