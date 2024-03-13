import React from 'react'
import pix from '../Components/Images/pix.png'

const About = () => {
    return (
        <div className='w-full py-16 px-4 text-center'>
            <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className=' md:w-[300px] my-4 mx-auto sm:w-[250px]'>
                    <div className='  border-8 border-[#fac271] rounded-md w-[350px] mx-auto h-[450px] bg-[#09090b] relative'>
                        <img src={pix} alt="my picture" className=' w-[350px] rounded-md absolute bg-gradient-to-r from-[#09090b] to-[#fac271] top-[-36px] right-5 flex flex-col justify-center' />
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>About me</h1>
                    <div className='text-md py-2 text-white md:text-2xl sm-text-xl '>
                        I'm a skilled web developer and UI/UX designer with expertise in creating responsive websites and strong design principles.
                    </div>
                    <div className=' flex  gap-4 text-center justify-center py-2 md:gap-2'>
                        <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[150px] text-center text-white py-2 px-4 font-semibold'>Get CV</button>
                        <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[150px] text-center bg-[#09090b]'>Hire me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About