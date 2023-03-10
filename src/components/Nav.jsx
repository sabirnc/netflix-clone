import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Nav = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate("")

  const handleLogout = async () =>{
    try{
      await logOut()
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex item-center justify-between p-4 z[220] w-full absolute">
      <Link to="/" className="z-[220]">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="z-[220]">
          <Link to="/account" className="z-[220]">
            <button className="text-white pr-4 ">Account</button>
          </Link>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white" onClick={handleLogout}>
              logout
            </button>
        </div>
      ) : (
        <div className="z-[220]">
          <Link to="/login" className="z-[220]">
            <button className="text-white pr-4 ">Sign In</button>
          </Link>
          <Link to="/signup" className="z-[220]">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
