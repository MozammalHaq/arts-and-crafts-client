import { Link, Outlet } from 'react-router-dom';
import { FaPlusSquare, FaUsers, FaHome } from 'react-icons/fa';
import { HiClipboardList, HiOutlineAdjustments } from "react-icons/hi";
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import { Fade, Rotate } from 'react-awesome-reveal';

const Dashboard = () => {
    const [admin, setAdmin] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const findAdmin = data?.filter(adm => user?.email === adm?.email && adm?.role === "admin");
                setAdmin(findAdmin);
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const findInstructors = data?.filter(instructor => user?.email === instructor?.email && instructor?.rol === "instructor");
                setInstructors(findInstructors);
            })
    }, [])


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />login
            <div className="drawer-content flex flex-col justify-start">
                {/* Page content here */}
                <Fade>
                    <Outlet />
                </Fade>
                <Rotate duration={2000}>
                    <div className='flex flex-col justify-center items-center h-screen'>
                        <h3 className='text-3xl'>Assalamu Alaikum, Warahmatulaah</h3>
                        <h2 className='text-6xl py-10 text-info'>{(admin.length > 0 && instructors.length) > 0 ? user?.displayName : instructors.length > 0 ? user?.displayName : user?.displayName}</h2>
                        <h3 className='text-3xl'>Your are <span className='text-primary'>{admin.length > 0 && instructors.length > 0 ? "Admin" : instructors.length > 0 ? "Instructor" : "User"}</span> of the Site</h3>
                    </div>
                </Rotate>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu font-semibold space-y-4 text-base p-4 w-80 h-full bg-[#121215] text-white text-base-content">
                    <h3 className='pl-4 py-8 text-4xl font-semibold text-yellow-600'>
                        {admin.length > 0 && instructors.length > 0 ? "Admin" : instructors.length > 0 ? "Instructor" : "User"} Panel
                    </h3>

                    {
                        admin.length > 0 && instructors.length > 0
                            ?
                            <>
                                <li className='hover:text-yellow-600'><Link to="/dashboard/addClass"><FaPlusSquare /> Add a Class</Link></li>
                                <li className='hover:text-yellow-600'><Link to="/dashboard/myClass"><HiClipboardList /> My Classes</Link></li>
                                <li className='hover:text-yellow-600'><Link to="/dashboard/manageClass"> <HiOutlineAdjustments />  Manage Classes</Link></li>
                                <li className='hover:text-yellow-600'><Link to="/dashboard/manageUsers"><FaUsers /> Manage Users</Link></li>
                            </>
                            : instructors.length > 0 ?
                                <>
                                    <li className='hover:text-yellow-600'><Link to="/dashboard/addClass"><FaPlusSquare /> Add a Class</Link></li>
                                    <li className='hover:text-yellow-600'><Link to="/dashboard/myClass"><HiClipboardList /> My Classes</Link></li>
                                </> :
                                <>
                                    <li className='hover:text-yellow-600'><Link to="/dashboard/selectedClass"><FaPlusSquare />My Selected Class</Link></li>
                                    <li className='hover:text-yellow-600'><Link to="/dashboard/enrolledClass"><HiClipboardList /> My Enrolled Class</Link></li>
                                </>
                    }
                    <li className='hover:text-yellow-600 text-pink-700'><Link to='/'><FaHome /> Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;