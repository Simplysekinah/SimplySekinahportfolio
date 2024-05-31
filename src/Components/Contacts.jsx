import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Contacts = () => {
    return (
        <>
            <div className=' w-full mx-auto relative flex justify-center'>
                <div className='bg-gradient-to-r from-[#fac271] to-[#09090b] max-w[310px] w-[800px] max-md:w-[400px] flex flex-col items-center justify-center rounded-tl-3xl rounded-br-3xl p-4'>
                    <h1 className='text-2xl text-white text-center font-semibold'>Contacts me</h1>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='w-[400px] max-w-[310px]'>
                            <h2 className=' text-white'>Drop a message</h2>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed sapiente consequuntur qui quibusdam minima nostrum. Incidunt non quo assumenda optio?</p>
                            <div className=' flex flex-col gap-1 p-2'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationDot className=' text-white' size={15} />
                                    <div className='text-white'>Address</div>
                                </div>
                                <a href="" className='text-white p-2'>akinolasekinat123@gmail.com</a>
                            </div>
                            <div className=' flex flex-col gap-1 p-2'>
                                <div className='flex items-center gap-3'>
                                    <IoCall className=' text-white' size={15} />
                                    <div className='text-white'>Contacts</div>
                                </div>
                                <a href="" className='text-white p-2'>akinolasekinat123@gmail.com</a>
                            </div>
                            <div className=' flex flex-col gap-1 p-2'>
                                <div className='flex items-center gap-3'>
                                    <MdEmail className=' text-white' size={15} />
                                    <div className='text-white'>Email</div>
                                </div>
                                <a href="" className='text-white p-2'>akinolasekinat123@gmail.com</a>
                            </div>
                        </div>
                        <div className=' shadow-[#fac271] shadow-md w-[350px] max-w-[310px] flex flex-col gap-4 p-4'>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <textarea name="" id="" cols="10" rows="10" placeholder='Message'></textarea>
                        </div>
                    </div>
                    <hr className='bg-white m-2' />
                    <div className='flex items-center justify-between text-center flex-wrap'>
                        <div>
                            <div className='text-white'>2024-Simplysekinah,All rights reserved</div>
                        </div>
                        <div className='py-2 flex gap-2'>
                            <div className=' bg-[#fac271] shadow-[#09090b]] shadow-md p-2 w-10 h-10 flex items-center justify-center rounded-xl'>
                                <a href="https://www.linkedin.com/in/sekinat-akinola-b44391206/" >
                                    <FaLinkedinIn size={20} className='text-white' />
                                </a>
                            </div>
                            <div className=' bg-[#fac271] shadow-[#09090b]] shadow-md p-2 w-10 h-10 flex items-center justify-center rounded-xl'>
                                <a href="https://github.com/Simplysekinah">
                                    <FaGithub size={20} className='text-white'/>
                                </a>
                            </div>
                            <div className=' bg-[#fac271] shadow-[#09090b]] shadow-md p-2 w-10 h-10 flex items-center justify-center rounded-xl'>
                                <a href="https://x.com/SekinahSimply">
                                    <BsTwitterX size={20} className='text-white'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts