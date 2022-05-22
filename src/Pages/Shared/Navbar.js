import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [gUser] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden bg-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinejoin="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary">
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/myPortfolio">My Portfolio</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-secondary">Electronic Tool Zone</Link>
            </div>
            <div className="navbar-center hidden lg:flex text-secondary">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/myPortfolio">My Portfolio</Link></li>
                </ul>
            </div>
            <div className="navbar-end text-secondary p-2">
                {
                    gUser && <button onClick={handleLogout}>Log Out</button>
                }
                {
                    !gUser && <Link to="/login"><button>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;