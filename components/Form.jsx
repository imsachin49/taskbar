import React from 'react'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({onSubmit,mode}) => {
  let isDark=mode==='dark'?true:false;
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false
  })

  const { name, email, password, confirmPassword, checkbox } = inputs

  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.warning('Passwords do not match', {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } 
    else if(!checkbox) {
      toast.warning('Please accept the terms and conditions', {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      console.log(inputs)
      onSubmit(inputs);
      toast.success('Account done! set Your Personal info Now', {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  }

  return (
    <div className={`p-8 m-4 mb-0 mx-auto lg:w-[50vw] md:w-[80vw] xs:w-[95vw] -mt-2 ${isDark ? "bg-[#1C2534] text-white" : "border border-t-slate-50"}`}>    
      <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" className={`w-full lg:w-auto border border-gray-500 rounded-sm p-2 outline-none placeholder:text-gray-500 ${isDark ? "bg-[#333B48] placeholder:text-gray-300 border-none" : ""}`} value={name} onChange={handleChange} required/>
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Email<sup>*</sup></label>
          <input type="email" name="email" id="email" placeholder='Email Address' className={`w-full lg:w-auto border border-gray-500 rounded-sm p-2 outline-none placeholder:text-gray-500 ${isDark ? "bg-[#333B48] placeholder:text-gray-300 border-none" : ""}`} value={email} onChange={handleChange} required/>
          <p className='text-sm text-gray-500'>Please Input a real Email Address</p>
        </div>
        <div className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
          <div className="flex flex-col space-y-2 w-full lg:w-1/2">
            <label htmlFor="password">Password<sup>*</sup></label>
            <input type="password" name="password" id="password" placeholder='Password' className={`w-full lg:w-auto border border-gray-500 rounded-sm p-2 outline-none placeholder:text-gray-500 ${isDark ? "bg-[#333B48] placeholder:text-gray-300 border-none" : ""}`} value={password} onChange={handleChange} required/>
            {!password.length>0 && <p className='text-sm text-gray-500'>Please Enter your Password</p>}
          </div>
          <div className="flex flex-col space-y-2 w-full lg:w-1/2">
            <label htmlFor="confirmPassword">Confirm Password<sup>*</sup></label> 
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' className={`w-full lg:w-auto border border-gray-500 rounded-sm p-2 outline-none placeholder:text-gray-500 ${isDark ? "bg-[#333B48] placeholder:text-gray-300 border-none" : ""}`} value={confirmPassword} onChange={handleChange} required/>
              {(password!=='' && password !== confirmPassword) &&<p className='text-sm text-gray-500'>Password need to match</p>}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2 items-center">
            <input type="checkbox" name="checkbox" id="checkbox" className="border border-gray-900 rounded-sm p-6 outline-none placeholder:text-gray-500" value={checkbox} onChange={handleChange} required />
            <p className='text-sm text-gray-500'>I accept the Terms and Privacy Policy</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex align-middle justify-center items-center">
            <p className='pr-1 '>Next</p>
            <ArrowForwardIosIcon style={{color:'white',fontSize:'15px'}} />
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>

  )
}

export default Form
