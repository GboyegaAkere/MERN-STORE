import React from 'react'
import loginicons from "../assest/signin.gif"
import { FaEye } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section id='login'>
      <div className='mx-auto container p-4'>
            <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                   <img src={loginicons} alt='login icons'/>
                </div>

                <form className='pt-6'>
                    <div className='grid'>
                        <label>Email :</label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                                type='email' 
                                placeholder='enter email'
                                className='w-full h-full outline-none bg-transparent'
                            />
                        </div>
                    </div>

                    <div>
                        <label>Password :</label>
                        <div  className='bg-slate-100 p-2 flex items-center'>
                            <input 
                                type='password' 
                                placeholder='enter password'
                                 className='w-full h-full outline-none bg-transparent'
                            />
                            <div className='cursor-pointer'>
                                <span><FaEye/></span>
                            </div>
                        </div>
                        <Link to={"/forget-password"} className='block w-fit ml-auto hover:underline'>Forget password</Link>
                    </div>

                    <button className='bg-red-600 rounded-full text-white px-6 py-2 w-full max-w-[150px] mx-auto block mt-4'>Login</button>
                </form> 
                <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className='hover:text-red-700 text-red-600 hover:underline'>Sign up</Link></p>
            </div>

      </div>
    </section>
  )
}

export default Login