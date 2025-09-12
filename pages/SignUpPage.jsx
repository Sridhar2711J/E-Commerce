import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

function SignUpPage() {
  return (
    <div className='flex justify-center items-center h-160 relative animate-jump-in animate-once'>
            <from className='border-0 w-100 flex flex-col justify-center items-center p-10 rounded-[5px] relative z-2 shadow-[0_0_5px_rgb(159,32,137)] bg-white'>
    
                <h1 className='text-[rgb(159,32,137)] text-4xl font-semibold'>SignUp</h1>
                <div className="relative mt-6">
                    <input
                        type="email"
                        id="username"
                        required
                        placeholder="UserName" 
                        className="peer relative border-2 w-[280px] rounded-[5px] h-10 px-3 pt-0 pr-8 border-[#b4b0b0] outline-0 placeholder-transparent focus:border-[rgb(159,32,137)] z-1"
                    />
                    <label
                        htmlFor="username"
                        className="absolute left-3.5 top-3 text-gray-500 text-sm transition-all  z-2
                        peer-focus:top-[-10px] peer-focus:text-[rgb(159,32,137)] peer-focus:text-sm peer-focus:bg-white
                        peer-valid:top-[-10px] peer-valid:text-[rgb(159,32,137)] peer-valid:text-sm peer-valid:bg-white
                        peer-[&:not(:placeholder-shown)]:top-[-10px]
                      peer-[&:not(:placeholder-shown)]:text-[rgb(159,32,137)]
                        peer-[&:not(:placeholder-shown)]:text-sm
                      peer-[&:not(:placeholder-shown)]:bg-white"
                    >
                        UserName
                    </label>
                    <FaRegUser className='absolute top-3 right-3 text-[18px] text-gray-500 peer-focus:text-[rgb(159,32,137)] z-0'/>
                </div>

                <div className="relative mt-6">
                    <input
                        type="text"
                        id="email"
                        required
                        placeholder="Email" 
                        className="peer relative border-2 w-[280px] rounded-[5px] h-10 px-3 pt-0 pr-8 border-[#b4b0b0] outline-0 placeholder-transparent focus:border-[rgb(159,32,137)] z-1"
                    />
                    <label
                        htmlFor="Email"
                        className="absolute left-3.5 top-3 text-gray-500 text-sm transition-all  z-2
                        peer-focus:top-[-10px] peer-focus:text-[rgb(159,32,137)] peer-focus:text-sm peer-focus:bg-white
                        peer-valid:top-[-10px] peer-valid:text-[rgb(159,32,137)] peer-valid:text-sm peer-valid:bg-white
                        peer-[&:not(:placeholder-shown)]:top-[-10px]
                      peer-[&:not(:placeholder-shown)]:text-[rgb(159,32,137)]
                        peer-[&:not(:placeholder-shown)]:text-sm
                      peer-[&:not(:placeholder-shown)]:bg-white"
                    >
                        Email
                    </label>
                    <MdOutlineEmail className='absolute top-3 right-3 text-[18px] text-gray-500 peer-focus:text-[rgb(159,32,137)] z-0'/>
                </div>
    
                <div className="relative mt-6">
                    <input  
                        type = "password"
                        id="password"
                        required
                        placeholder="Password" 
                        className="peer relative border-2 w-[280px] rounded-[5px] h-10 px-3 pt-0 pr-8 border-[#b4b0b0] outline-0 placeholder-transparent focus:border-[rgb(159,32,137)] z-1"
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-3.5 top-3 text-gray-500 text-sm transition-all z-2 
                        peer-focus:top-[-10px] peer-focus:text-[rgb(159,32,137)] peer-focus:text-sm peer-focus:bg-white
                        peer-valid:top-[-10px] peer-valid:text-[rgb(159,32,137)] peer-valid:text-sm peer-valid:bg-white
                        peer-[&:not(:placeholder-shown)]:top-[-10px]
                      peer-[&:not(:placeholder-shown)]:text-[rgb(159,32,137)]
                        peer-[&:not(:placeholder-shown)]:text-sm
                      peer-[&:not(:placeholder-shown)]:bg-white"
                    >
                        Password
                    </label>
                    <TbLockPassword className='absolute top-2 right-3 text-gray-500 peer-focus:text-[rgb(159,32,137)] text-2xl z-0'/>
                </div>
      
                <div className="relative mt-6">
                    <input  
                        type = "password"
                        id="confrom-password"
                        required
                        placeholder="Password" 
                        className="peer relative border-2 w-[280px] rounded-[5px] h-10 px-3 pt-0 pr-8 border-[#b4b0b0] outline-0 placeholder-transparent focus:border-[rgb(159,32,137)] z-1"
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-3.5 top-3 text-gray-500 text-sm transition-all z-2 
                        peer-focus:top-[-10px] peer-focus:text-[rgb(159,32,137)] peer-focus:text-sm peer-focus:bg-white
                        peer-valid:top-[-10px] peer-valid:text-[rgb(159,32,137)] peer-valid:text-sm peer-valid:bg-white
                        peer-[&:not(:placeholder-shown)]:top-[-10px]
                      peer-[&:not(:placeholder-shown)]:text-[rgb(159,32,137)]
                        peer-[&:not(:placeholder-shown)]:text-sm
                      peer-[&:not(:placeholder-shown)]:bg-white"
                    >
                       Confirm Password
                    </label>
                    <TbLockPassword className='absolute top-2 right-3 text-gray-500 peer-focus:text-[rgb(159,32,137)] text-2xl z-0'/>
                </div>
    
    
                <button className='mt-5 border-0 outline-0 bg-[rgb(159,32,137)] text-[#ffffff] text-[20px] px-7 rounded-[5px] cursor-pointer hover:bg-[rgb(116,23,101)]' type='submit'>Sigup</button>       
                
                <Link to={"/login"}>
                <h3 className='mt-4 text-blue-700 cursor-pointer'>Already have Account</h3>    
                </Link>
            </from>
        </div>
  )
}

export default SignUpPage