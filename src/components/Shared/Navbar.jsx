import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../../providers/AuthProvider';
// import phImg from '../../assets/images/banner/placeholder.jpg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {user && <li className='uppercase text-yellow-600 bg-yellow-50 rounded-full'><Link to="/dashboard">Dashboard</Link></li>}
    </>

    return (
        // <div className="navbar bg-gradient-to-r from-purple-600 font-semibold to-pink-800 text-white">
        <div className="navbar bg-gradient-to-r from-[#1D1E23] font-semibold to-pink-800 text-white">
            <div className="navbar-start">
                <div className="dropdown text-yellow-600">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text btn btn-ghost normal-case text-sm md:text-2xl font-bold">Arts-&-craftS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user
                        ?
                        <>
                            {/* <img src={phImg} className='w-11 h-11 rounded-full' alt="" /> */}
                            <Link className="rounded-full bg-yellow-700 ml-2 btn btn-ghost" to="/login">Login</Link>
                        </>
                        :
                        <>
                            <img title={user?.displayName} className='w-11 h-11 rounded-full' src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="rounded-full bg-yellow-700 ml-2 btn btn-ghost">log Out</button>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;