import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Dash from './Dash'
import WishList from './WishList';
import Order from './Order';


function MyDashboard({ user,wishlist,removeFromWishlist,orders,setOrders,cart}) {
  const defaultPicture = '/picture.webp';
      console.log(user);
      
  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='w-[20%] bg-[#ffffff] flex flex-col items-center pt-10 shadow-[0_0_5px_#656565] gap-5'>
        <h1 className='text-[#802c6e] text-3xl font-[600]'>My Dashboard</h1>
        <img
          src={!user ? defaultPicture : user.picture}
          alt="user"
          className='rounded-full w-30'
        />
        <h2 className='text-2xl text-center'>
          Welcome, {!user ? "Guest" : user.name}!
        </h2>

        <Link to="/account/dashboard">
          <h2 className="font-[600] text-[20px] bg-gray-200 w-50 text-center py-1 rounded-[5px] cursor-pointer text-black hover:bg-[rgb(159,32,137)] hover:text-white">
            Dashbord
          </h2>
        </Link>

        <Link to="/account/wishlist">
          <h2 className="font-[600] text-[20px] bg-gray-200 w-50 text-center py-1 rounded-[5px] cursor-pointer text-black hover:bg-[rgb(159,32,137)] hover:text-white">
            WishList
          </h2>
        </Link>

        <Link to="/account/order">
          <h2 className="font-[600] text-[20px] bg-gray-200 w-50 text-center py-1 rounded-[5px] cursor-pointer text-black hover:bg-[rgb(159,32,137)] hover:text-white">
            Order
          </h2>
        </Link>
      </div>

      {/* Main Content */}
      <div className='w-[80%] p-5 pb-140'>
        <Routes>
          <Route path="dashboard" element={<Dash cart={cart}  wishlist={wishlist} orders={orders}/>} />
          <Route path="wishlist" element={<WishList  wishlist={wishlist} removeFromWishlist={removeFromWishlist}/>} />
          <Route path="order" element={<Order  orders={orders} setOrders={setOrders} />} />
        </Routes>
      </div>
    </div>
  )
}

export default MyDashboard;
