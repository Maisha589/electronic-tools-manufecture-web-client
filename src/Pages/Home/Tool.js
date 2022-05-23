import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, image, description, price } = tool;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price} per unit</p>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`}> <button className="btn btn-primary hover:btn-secondary text-secondary hover:text-primary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;