import React from 'react';

const Tool = ({ tool }) => {
    const { name, image, description, price, available } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Available:{available}</p>
                <div class="card-actions">
                    <button class="btn btn-primary text-secondary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;