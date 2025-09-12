import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode"; // ✅ default import
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";

export default function LoginPage({ onLogin }) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

   const navigate = useNavigate(); 

  const handleChange = (e) => setIsChecked(e.target.checked);

  const handleLogin = async (credentialResponse) => {
  try {
    setLoading(true);

    const userData = jwtDecode(credentialResponse.credential);

    const profile = {
      name: userData.name,
      email: userData.email,
      picture: userData.picture,
    };

    onLogin(profile);
    localStorage.setItem("user", JSON.stringify(profile));

    navigate('/'); // ✅ redirect to product page
  } catch (err) {
    console.error("Login Failed:", err);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex justify-center items-center h-160 relative animate-jump-in animate-once">
      {/* ✅ FIXED: form instead of from */}
      <form
        className="border-0 w-100 flex flex-col justify-center items-center p-10 rounded-[5px] relative z-2 shadow-[0_0_5px_rgb(159,32,137)] bg-white"
        onSubmit={(e) => e.preventDefault()} // ✅ prevent page refresh
      >
        <h1 className="text-[rgb(159,32,137)] text-4xl font-semibold">Login</h1>

        {/* Username input */}
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
            className="absolute left-3.5 top-3 text-gray-500 text-sm transition-all z-2
              peer-focus:top-[-10px] peer-focus:text-[rgb(159,32,137)] peer-focus:text-sm peer-focus:bg-white
              peer-valid:top-[-10px] peer-valid:text-[rgb(159,32,137)] peer-valid:text-sm peer-valid:bg-white
              peer-[&:not(:placeholder-shown)]:top-[-10px]
              peer-[&:not(:placeholder-shown)]:text-[rgb(159,32,137)]
              peer-[&:not(:placeholder-shown)]:text-sm
              peer-[&:not(:placeholder-shown)]:bg-white"
          >
            UserName
          </label>
          <FaRegUser className="absolute top-3 right-3 text-[18px] text-gray-500 peer-focus:text-[rgb(159,32,137)] z-0" />
        </div>

        {/* Password input */}
        <div className="relative mt-6">
          <input
            type={isChecked ? "text" : "password"}
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
          <TbLockPassword className="absolute top-2 right-3 text-gray-500 peer-focus:text-[rgb(159,32,137)] text-2xl z-0" />
        </div>

        {/* Checkbox + Forgot password */}
        <div className="flex justify-between gap-5 mt-5">
          <div>
            <input
              type="checkbox"
              className="accent-[rgb(159,32,137)]"
              onChange={handleChange}
            />
            <label>Show Password</label>
          </div>
          <a className="text-blue-600 cursor-pointer">Forgot Password?</a>
        </div>

        {/* Submit button */}
        <button
          className="mt-5 border-0 outline-0 bg-[rgb(159,32,137)] text-[#ffffff] text-[20px] px-7 rounded-[5px] cursor-pointer hover:bg-[rgb(116,23,101)]"
          type="submit"
        >
          Submit
        </button>

        {/* Divider */}
        <div className="relative text-gray-500">
          <hr className="w-70 mt-5" />
          <div>
            <h3 className="absolute left-31 top-0 bg-white p-2">OR</h3>
          </div>
        </div>

        {/* Google login */}
        <div className="mt-4">
          {loading ? (
            <p>🔄 Logging you in...</p>
          ) : (
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          )}
        </div>
      </form>
    </div>
  );
}
