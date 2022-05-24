import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-primary text-center mt-5 mb-5 '>My Orders</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                    <li className='font-seibold text-accent'><Link to="/dashboard">My orders</Link></li>
                    <li className='font-seibold text-accent'><Link to="/dashboard/review">Review</Link></li>
                    <li className='font-seibold text-accent'><Link to="/dashboard/allUsers">All Users</Link></li>
                    <li className='font-seibold text-accent'><Link to="/dashboard/myProfile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;