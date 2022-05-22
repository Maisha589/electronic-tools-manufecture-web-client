import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, image, description, price, available } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Available:{available}</p>
                <div className="card-actions">
                    <Link to="/purchase"><button className="btn btn-primary text-secondary">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;