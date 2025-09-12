import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";

function MyAccount({isMyAccount, setIsMyAccount,user}) {

    const defaultPicture = '/picture.webp'
      
  return (
     <div className={`absolute top-[120px] right-5 bg-white px-10 py-5 rounded-2xl z-4 shadow-[0_0_5px_#656565] flex flex-col items-center ${isMyAccount ?"translate-x-0":"translate-x-2000"} animate-fade`}>
        <img src={!user ? defaultPicture:user.picture}
        alt={"Guest"}className='rounded-full w-15' />
        <h1 className='text-2xl mt-3'>Hi, {!user ? "Guest" : user.name}!</h1>
        <Link to='/account/dashboard' onClick={()=>{setIsMyAccount(false)}}>
            <h3 className='mt-3 cursor-pointer bg-gray-200 w-60 text-center py-1 rounded-2xl hover:bg-gray-300'>My DashBoard</h3>
        </Link>
        <Link to="/login" onClick={()=>{setIsMyAccount(false);setUser(null)}}>
            <h3 className='mt-3 cursor-pointer bg-gray-200  w-60 text-center py-1 rounded-2xl hover:bg-gray-300'>LogOut</h3>
        </Link>
    </div>
  )
}

export default MyAccount