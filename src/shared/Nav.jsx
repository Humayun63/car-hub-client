import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import logo from '../assets/logo1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <nav className={`${!user ? 'flex ' : 'md:flex'} justify-between items-center bg-blue-300 px-4 pt-1 pb-3 md:pb-1 mt-4 rounded-md`}>
            <div className="navbar mt-4">
                <div className="navbar-start w-full flex justify-between md:block">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'} >Home</NavLink></li>
                            <li><NavLink to='/toys/all' className={({ isActive }) => isActive ? 'active' : 'default'} >All Toys</NavLink></li>
                            <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'active' : 'default'} >Blogs</NavLink></li>
                            {
                                user && <>
                                    <li><NavLink to='/toys/my-toys' className={({ isActive }) => isActive ? 'active' : 'default'} >My Toys</NavLink></li>
                                    <li><NavLink to='/toys/add' className={({ isActive }) => isActive ? 'active' : 'default'} >Add A Toy</NavLink></li>
                                </>
                            }
                        </ul>

                    </div>
                    <Link to='/' className="btn btn-primary  normal-case text-xl"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <img src={logo} alt="logo" className='w-16' />
                        CarHub
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'} >Home</NavLink></li>
                        <li><NavLink to='/toys/all' className={({ isActive }) => isActive ? 'active' : 'default'} >All Toys</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive }) => isActive ? 'active' : 'default'} >Blogs</NavLink></li>
                        {
                            user && <>
                                <li><NavLink to='/toys/my-toys' className={({ isActive }) => isActive ? 'active' : 'default'} >My Toys</NavLink></li>
                                <li><NavLink to='/toys/add' className={({ isActive }) => isActive ? 'active' : 'default'} >Add A Toy</NavLink></li>
                            </>
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-end mx-auto flex items-center">
                {
                    user ?
                        <>
                            {

                                user.photoURL && <img src={user.photoURL} alt="This is image" className='w-12 rounded-full mx-3' title={user.displayName ? user.displayName : ''} />
                            }
                            <button className='btn mx-2 btn-primary' onClick={handleLogOut}>Log Out</button>
                        </> :
                        <Link to='/login'><button className='btn btn-primary mt-4'>Login</button></Link>
                }
            </div>
        </nav>
    );
};

export default Nav;