import React from 'react'
import Image from 'next/image'

const Navbar = ({mode}) => {
  console.log(mode);
  let isDark=mode==='dark'?true:false;
  // for dark mode use #1E1E1E
  return (
    <div className={`flex items-center align-middle justify-center border w-full mb-2 p-0 mt-0 ${isDark ? "bg-[#151B28] text-white border-none" :"bg-white"}`}>
        {/* <Image src='/logo.png' width={50} height={50} /> */}
        <div className='text-center p-2 font-bold text-3xl'>Lookscout</div>
    </div>
  )
}

export default Navbar
