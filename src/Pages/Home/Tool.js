import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Tool = ({ tool }) => {
    const { _id, name, image, description, price } = tool;
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price} per unit</p>
                {
                    !admin && <div className="card-actions">
                        <Link to={`/purchase/${_id}`}> <button className="btn btn-primary hover:btn-secondary text-secondary hover:text-primary">Purchase</button></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Tool;