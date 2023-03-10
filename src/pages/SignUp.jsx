import React from "react";
import { Link  , useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signup} = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover z-[10]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        ></img>
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign up</h1>
              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="p-3 my-3 bg-gray-700 rounded"
                  type="email"
                  autoComplete="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-3 bg-gray-700 rounded"
                  type="password"
                  autoComplete="current-password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign up
                </button>
              </form>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p className="mr-2">
                  <input type="checkbox" />
                  Remember me
                </p>
                <p>Need help ?</p>
              </div>
              <p className="py-8 cursor-pointer">
                <span className="text-gray-600">
                  Already Signed in Netflix?
                </span>
                <Link to="/signin">sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
