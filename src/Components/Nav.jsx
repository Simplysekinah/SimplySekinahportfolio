import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../Components/Images/logo.mp4'


const Nav = () => {
  const [nav, setnav] = useState(false)
  const handlenav = () => {
    setnav(!nav)
  }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] text-white mx-auto px-4 relative z-20'>

      <video loop autoPlay muted className=' md:w-[230px] h-[300px] sm:w-[220px]'>
        <source src={logo} type="video/mp4" />
      </video>
      <ul className='hidden md:flex'>
        <li className='p-4 text-[#fac271]'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Experience</li>
        <li className='p-4'>Service</li>
        <li className='p-4 bg-gradient-to-r from-[#010001] to-[#fac271] relative rounded-[50px] shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg hover:scale-105 font-semibold w-[150px] text-center'>Contact
        <div className="absolute inset-0 rounded-[50px] border-4 border-transparent animate-border"></div>
        </li>
      </ul>
      <div onClick={handlenav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] z-10 h-full border-r border-r-gray-900 bg-[#09090b] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <video loop autoPlay muted className=' w-[250px] h-[300px]'>
          <source src={logo} type="video/mp4" />
        </video>
        <ul className='pt-12 uppercase mt-[-90px]'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Experience</li>
          <li className='p-4 border-b border-gray-600'>Service</li>
          <li className='p-4 bg-gradient-to-r from-[#09090b] to-[#fac271] relative rounded-[50px] shadow-xl hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg font-semibold w-[150px] text-center mt-2'>Contact
            <div className="absolute inset-0 rounded-[50px] border-4 border-transparent animate-border"></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav