import React, {useState} from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { motion } from 'framer-motion';
import * as api from "../axios";

const defaultValues = {
  username: "",
  email: "",
  fullName: "",
  password: "",
  rePassword: "",
}

function Signup() {
  const [values, setValues] = useState(defaultValues);

  const inputDetailsChangeHandler = e =>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  const submitHandler =  (e) => {
     e.preventDefault();
     api.post("https://8424-102-176-246-53.ngrok-free.app/api/v1/auth/users/", values).then(res => console.log(res)).catch(err => console.log(err))
  }
  // const baseUrl = 'https://2164-102-176-246-49.ngrok-free.app/'



 
  
  return (
    <>
    
    <div className='m-8'>
    <Nav/>
      <div className='flex justify-center items-center h-screen'>
       <div className='p-4 max-w-md w-full'>
       <h1 className='text-center mt-4 text-2xl font-medium'>Create your account</h1>
       <p className='text-center text-sm text-gray-500'>Let's get started with your account</p>

       <form onSubmit={submitHandler} className='mt-6'>
          <label className='text-lg'>Name</label>
          <input name="userName" value={values.userName} onChange={inputDetailsChangeHandler} className='block my-2 border w-full p-2 rounded-lg border-gray-300' placeholder='Enter your full name' />

          <label className='text-lg'>Email</label>
          <input name="email" value={values.email} onChange={inputDetailsChangeHandler} className='block my-2 border w-full p-2 rounded-lg border-gray-300' placeholder='Enter your email'/>

          <label className='text-lg'>Password</label>
          <input name="password" value={values.password} onChange={inputDetailsChangeHandler} className='block my-2 border w-full p-2 rounded-lg border-gray-300' type="password" placeholder='Enter your password'/>
          <input name="rePassword" value={values.rePassword} onChange={inputDetailsChangeHandler} className='block my-2 border w-full p-2 rounded-lg border-gray-300' type="password" placeholder='Confirm your password'/>

          <div className='flex space-x-2'>
          <input type='checkbox' />
          <p className='text-sm'>I agree to all terms and privacy policy</p>
          </div>

          <div className='m-auto'>
          <button type="submit" className='bg-gradient-to-br rounded-lg from-black to-gray-800 w-full mt-8 p-2 text-white'>Sign Up</button>
          <p className='mt-4 text-center'>Already have an account <strong className='text-gray-500'>
          Login in
          </strong></p>
          </div>
       </form>
      </div>
      </div>
   </div>
<Footer/>
    </>
  )
}

export default Signup
