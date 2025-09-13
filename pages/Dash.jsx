import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaBox } from "react-icons/fa6";

function Dash({cart,wishlist,orders}) {
  return (
    <div className='flex flex-col gap-30 justify-center items-center'>
      <div>
         <h2 className='text-[#802c6e] text-3xl font-[600] mt-4 bg-white'>My DashBoard</h2>
      </div>

      <div className='flex gap-20 '>
        <div className='flex flex-col justify-center items-center p-7 gap-3 rounded-[5px] shadow-[0_0_5px_#802c6e] text-[#802c6e]'>
            <FaCartShopping className='text-9xl' />
            <h1 className='text-3xl'>Cart({cart.reduce((sum, item) => sum + item.quantity, 0)})</h1>
        </div>
        <div className='flex flex-col justify-center items-center p-7 gap-3 rounded-[5px] shadow-[0_0_5px_#802c6e] text-[#802c6e]'>
          <FaHeart className='text-9xl' />
          <h1 className='text-3xl'>WishList({wishlist.length})</h1>
        </div>
        <div className='flex flex-col justify-center items-center p-7 gap-3 rounded-[5px] shadow-[0_0_5px_#802c6e] text-[#802c6e]'>
          <FaBox className='text-9xl'/>
          <h1 className='text-3xl'>Order({orders.reduce((sum, item) => sum + item.quantity, 0)})</h1>
        </div>
      </div>
    </div>
  )
}

export default Dash