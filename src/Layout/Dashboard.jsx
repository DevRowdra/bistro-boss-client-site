import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {  FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
const Dashboard = () => {
  // ToDo 
  const[cart]=useCart()
  // const isAdmin=true;
  const [isAdmin]=useAdmin()
  console.log(isAdmin)
  
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80  ">
            
         {isAdmin ? <>
          <li><NavLink to='/dashboard/home'><FaHome></FaHome> Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/reservations'><FaUtensils></FaUtensils> Add Items</NavLink></li>
            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Manage item </NavLink></li>
            <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Bookings </NavLink></li>
            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users </NavLink></li>
            
         
         
         </> : <>
         
         <li><NavLink to='/dashboard/home'><FaHome></FaHome> User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
            <div className="badge badge-secondary">+{cart?.length}</div>
            
            </NavLink></li>
         
         
         </>}
            <div className='divider'></div>
            <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to='/menu'><></>Our Menu</NavLink></li>
            <li><NavLink to='/order/salad'><></>Our Menu</NavLink></li>
           
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;