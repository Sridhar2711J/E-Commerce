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
      <form
        className="border-0 w-100 flex flex-col justify-center items-center p-10 rounded-[5px] relative z-2 shadow-[0_0_5px_rgb(159,32,137)] bg-white"
        onSubmit={(e) => e.preventDefault()} // ✅ prevent page refresh
      >
        <h1 className="text-[rgb(159,32,137)] text-4xl font-semibold">Login</h1>

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
