import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="navbar bg-base-100 lg:w-[1000 px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div className="indicator text-xl flex flex-col">
                                {user && <div className="tooltip tooltip-right" data-tip={user?.displayName}>
                                    <div className="avatar me-4">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>}
                                <Link className='pe-3' to='/'>Home</Link>
                                <Link className='pe-3' to='/blogs'>Blogs</Link>
                                {user ? <><Link onClick={handleLogout}>Logout</Link>
                                    <Link className='ps-3' to='/addToy'>Add Toy</Link>
                                    <Link className='ps-3' to='/myToy'>My Toy</Link>
                                </> :
                                    <Link to='/login'>Login</Link>
                                }
                                <Link className='px-3' to='/allToys'>All Toys</Link>

                            </div>
                        </div>
                    </div>
                    <div className=' sm:w-full'>
                        <img className='w-32 h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvJDZuBjWHkRdlmmPxuli2IeEoRBBr3IJbmai9ulZCE8inwDG2brcpxFQ9HVLzSBOHq4&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1">
                        <div className="indicator text-xl">
                            {user && <div className="tooltip tooltip-right" data-tip={user?.displayName}>
                                <div className="avatar me-4">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>}
                            <Link className='pe-2' to='/'>Home</Link>
                            <Link className='pe-2' to='/blogs'>Blogs</Link>
                            {user ? <><Link onClick={handleLogout}>Logout</Link>
                                <Link className='ps-2' to='/addToy'>Add Toy</Link>
                                <Link className='ps-2' to='/myToy'>My Toy</Link>
                            </> :
                                <Link to='/login'>Login</Link>
                            }
                            <Link className='px-2' to='/allToys'>All Toys</Link>

                        </div>
                    </div>
                </div>
                <div className="navbar-end">

                    <h2 className="text-purple-900 font-bold normal-case text-5xl">Toy House</h2>

                </div>
            </div>
        </>


    );
};

export default Navbar;