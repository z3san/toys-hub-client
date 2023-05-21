import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import logo from "../../../../src/assets/logo.png"

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () =>{
  logOut().then(()=>{}).catch(error=>{
    console.log(error);
  })
  }

  const navItems = (
    <>
    <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}  to='/'>Home</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}  to='/allToys'>All Toys</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}  to='/blogs'>Blogs</NavLink>
    <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}  to='/myToys'>My Toys</NavLink>
   <NavLink className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}  to='/addToy'>Add a Toy</NavLink> 
    
    </>
  )


  return (
    <div className="navbar bg-gray-20 backdrop-blur bg-white/50 sticky top-0 z-30">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
        </ul>
      </div>
      
      <div className='flex items-center'>
        <img className='w-12 rounded' src={logo} alt="" />
        <div><Link to='/' className=" font-bold normal-case text-xl"> <span className='text-blue-500'>Toys</span> 
      <span className='text-pink-600'>Hub</span> </Link></div>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal items-center px-1 gap-5">
   
  {navItems}
      
  </ul>
    </div>
   <div className="navbar-end">
   {user && (
            
            <img
  title={user?.displayName}
  src={`${user?.photoURL}`}
  className="w-10 h-10 rounded-full"
  alt=""
/>
          
        )}
        {user ? (
          <button className='btn btn-outline btn-sm mx-2' onClick={handleLogout} >Logout</button>
        ) : (
          <Link to="/login">
            <button className='btn btn-outline btn-sm ' >Login</button>
          </Link>
        )}

    </div>
</div>
  )
};

export default NavBar;