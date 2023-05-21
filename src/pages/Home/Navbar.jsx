import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

    const {user, logout}= useContext(AuthContext);
    const handleLogout=()=>{
        logout()
        .then()
        .catch(error=>{
          console.log(error);
      })
      }

    return (
        <div className="navbar  mx-20 bg-base-100">
            <div className="navbar-start">
                <div className=' sm:w-full'>
                    <img className='w-1/3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvJDZuBjWHkRdlmmPxuli2IeEoRBBr3IJbmai9ulZCE8inwDG2brcpxFQ9HVLzSBOHq4&usqp=CAU" alt="" />
                </div>
            </div>
            <div className="navbar-start">
                <div>
                    <h2 className="text-purple-900 font-bold normal-case text-5xl">Toy House</h2>
                </div>
            </div>

            <div className="navbar-end me-36">


                <div className="indicator text-xl">
                    {user && <div className="tooltip tooltip-right" data-tip={user?.displayName}>
                    <div className="avatar me-4">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user ?.photoURL} />
  </div>
</div>
</div>}
                    <Link className='pe-3' to='/'>Home</Link>
                    <Link className='pe-3' to='/blogs'>Blogs</Link>
                    {user? <><Link onClick={handleLogout}>Logout</Link>
                    <Link className='ps-3' to='/addToy'>Add Toy</Link>
                    <Link className='ps-3' to='/myToy'>My Toy</Link>
                    </> :
                         <Link to='/login'>Login</Link>   
                    }
                    <Link className='px-3' to='/allToys'>All Toys</Link>
                    
                </div>

            </div>
        </div>
    );
};

export default Navbar;