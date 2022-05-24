import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);


    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                    <li className='font-seibold text-accent'><Link to="/dashboard">My Profile</Link></li>
                    {!admin &&
                        <>
                            <li className='font-seibold text-accent'><Link to="/dashboard/myOrders">My orders</Link></li>
                            <li className='font-seibold text-accent'><Link to="/dashboard/review">Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li className='font-seibold text-accent'><Link to="/dashboard/allUsers">All Users</Link></li>
                            <li className='font-seibold text-accent'><Link to="/dashboard/manageTools">Manage Tools</Link></li>
                            <li className='font-seibold text-accent'><Link to="/dashboard/addTool">addTool</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;