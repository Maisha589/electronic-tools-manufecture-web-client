import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const address = event.target.address.value;
        console.log(address);
    }

    return (
        <div>
            <h2>This is my profile</h2>
            {/* <h2>{data._id}</h2> */}

            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center'>
                {/* <input type="text" name='name' placeholder="your Name" className="input input-bordered input-primary w-full max-w-xs" required /> */}
                <input type="email" value={user?.email} className="input input-bordered input-primary w-full max-w-xs" readOnly disabled />
                {/* <input type="number" name='phone' placeholder="Your phone" className="input input-bordered input-primary w-full max-w-xs" required /> */}
                <input type="text" name='address' placeholder="your address" className="input input-bordered input-primary w-full max-w-xs" required />
                {/* <input className="input input-bordered input-primary w-full max-w-xs" required type="number" name="quantity" min="1000" max={available} /> */}
                <input type="submit" value="Book" className="input input-bordered w-full max-w-xs btn btn-primary hover:btn-secondary" />
            </form>

        </div>
    );
};

export default MyProfile;