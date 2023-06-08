import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaPlusSquare, FaUsers,FaHome } from 'react-icons/fa';
import { HiClipboardList, HiOutlineAdjustments } from "react-icons/hi";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content h-screen flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu font-semibold space-y-4 text-base p-4 w-80 h-full bg-[#121215] text-white text-base-content">
                    <h3 className='pl-4 py-8 text-4xl font-semibold text-yellow-600'>Controls</h3>
                    {/* Sidebar content here */}
                    <li className='hover:text-yellow-600'><Link to="/dashboard/selectedClass"><FaPlusSquare/>My Selected Class</Link></li>
                    <li className='hover:text-yellow-600'><Link to="/dashboard/enrolledClass"><HiClipboardList/> My Enrolled Class</Link></li>
                    <li className='hover:text-yellow-600'><Link to="/dashboard/addClass"><FaPlusSquare/> Add a Class</Link></li>
                    <li className='hover:text-yellow-600'><Link to="/dashboard/myClass"><HiClipboardList/> My Classes</Link></li>
                    <li className='hover:text-yellow-600'><Link to="/dashboard/manageClass"> <HiOutlineAdjustments/>  Manage Classes</Link></li>
                    <li className='hover:text-yellow-600'><Link to="/dashboard/manageUsers"><FaUsers/> Manage Users</Link></li>
                    <li className='hover:text-yellow-600'><Link to='/'><FaHome/> Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;