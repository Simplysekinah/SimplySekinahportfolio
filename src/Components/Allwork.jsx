import React from 'react'
import one from '../Components/Images/alarm1.PNG'

const Allwork = () => {
    return (
        <>
            <div>
                <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 mt-3 bg-slate-500 p-5'>
                    <div className='flex flex-col justify-center'>
                        <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>Alarm Timmer</h1>
                        <div className='text-md py-2 text-white md:text-xl sm-text-xl '>
                            "I created this alarm timer using HTML and CSS for the design, and implemented its functionality using JavaScript. After setting the desired alarm time and clicking the 'Set Alarm' button, music will begin playing. To stop the music once it starts, simply press the 'Stop' button."
                        </div>
                        <div className=' flex  gap-4 text-center justify-center py-2 md:gap-2'>
                            <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[150px] text-center text-white py-2 px-4 font-semibold'>
                                <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                            </button>
                            <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[150px] text-center bg-[#09090b]'>
                                <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                            </button>
                        </div>
                    </div>
                    <div className=' md:w-[300px] my-4 mx-auto sm:w-[250px]'>
                        <div className='  border-8 border-[#fac271] rounded-md w-[300px] mx-auto h-[350px] bg-[#09090b] relative'>
                            <img src={one} alt="my picture" className=' w-[300px] h-[350px] rounded-md absolute bg-gradient-to-r from-[#09090b] to-[#fac271] top-[-30px] right-5 flex flex-col justify-center' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allwork