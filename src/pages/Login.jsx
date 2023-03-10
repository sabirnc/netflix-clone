import React from 'react'
import { Link  , useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'

const Login = () => {
  const {user , logIn} = UserAuth()
  const [email ,setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [error , setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    try{
      await logIn(email, password)
      navigate("/")

    }
    catch(err){
      setError(err.message)
    }
  }

  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover z-[10]' src='https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg' ></img>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
               <div className='max-w-[320px] mx-auto py-16'>
                  <h1 className='text-3xl font-bold'>Sign in</h1>
                  <p className='text-red-600'>{error}</p>
                  <form className='w-full flex flex-col py-4' onSubmit={handleLogin}>
                    <input className='p-3 my-3 bg-gray-700 rounded' type="email" autoComplete='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    <input className='p-3 my-3 bg-gray-700 rounded' type="password" autoComplete='current-password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign in</button>
                  </form>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p className='mr-2'><input type="checkbox" />Remember me</p>
                    <p>Need help ?</p>
                  </div>
                  <p className='py-8 cursor-pointer'><span className='text-gray-600'>New to Netflix?</span><Link to="/signup">sign up</Link></p>
               </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Login