import React, { useState, useEffect } from 'react'
import one from '../Components/Images/alarm1.PNG'

const Project = () => {
    const [currentindex, setcurrentindex] = useState(0)

    const containers = () => {
        switch (currentindex) {
            case 0:
                return (
                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 mt-3 bg-red-500'>
                        <div className='flex flex-col justify-center'>
                            <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>Alarm Timmer</h1>
                            <div className='text-md py-2 text-white md:text-2xl sm-text-xl '>
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
                            <div className='  border-8 border-[#fac271] rounded-md w-[320px] mx-auto h-[400px] bg-[#09090b] relative'>
                                <img src={one} alt="my picture" className=' w-[320px] h-[400px] rounded-md absolute bg-gradient-to-r from-[#09090b] to-[#fac271] top-[-30px] right-5 flex flex-col justify-center' />
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 mt-3 bg-orange-300'>
                        <div className='flex flex-col justify-center'>
                            <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>Alarm Timmer</h1>
                            <div className='text-md py-2 text-white md:text-2xl sm-text-xl '>
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
                            <div className='  border-8 border-[#fac271] rounded-md w-[320px] mx-auto h-[400px] bg-[#09090b] relative'>
                                <img src={one} alt="my picture" className=' w-[320px] h-[400px] rounded-md absolute bg-gradient-to-r from-[#09090b] to-[#fac271] top-[-30px] right-5 flex flex-col justify-center' />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return(
                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 mt-3 bg-lime-400'>
                        <div className='flex flex-col justify-center'>
                            <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>Alarm Timmer</h1>
                            <div className='text-md py-2 text-white md:text-2xl sm-text-xl '>
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
                            <div className='  border-8 border-[#fac271] rounded-md w-[320px] mx-auto h-[400px] bg-[#09090b] relative'>
                                <img src={one} alt="my picture" className=' w-[320px] h-[400px] rounded-md absolute bg-gradient-to-r from-[#09090b] to-[#fac271] top-[-30px] right-5 flex flex-col justify-center' />
                            </div>
                        </div>
                    </div>  
                );
            case 3:
                return(
                    <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2 mt-3 bg-slate-500'>
                        <div className='flex flex-col justify-center'>
                            <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>Alarm Timmer</h1>
                            <div className='text-md py-2 text-white md:text-2xl sm-text-xl '>
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
                            <div className='  border-8 border-[#fac271] rounded-md w-[320px] mx-auto h-[400px] bg-[#09090b] relative'>
                                <img src={one} alt="my picture" className=' w-[320px] h-[400px] rounded-md absolute bg-gradient-to-r from-[#09090b] to-[#fac271] top-[-30px] right-5 flex flex-col justify-center' />
                            </div>
                        </div>
                    </div>
                ); 
            default:
                return null
        }
    }
    // const contentStyle = {
    //     display: 'flex',
    //     width: '100%',
    //     transition: 'opacity 0.5s ease-out',
    //     // opacity: currentindex === 0 ? 1 : 0,
    //     transform: `translateX(-${currentindex * 100}%)`, // Adjust the percentage based on the number of contents
    // };
    const moveToNext = () => {
        setcurrentindex((prev) => (prev + 1) % 4)
    }

    const moveToPrev = () => {
        setcurrentindex((prev) => (prev - 1) % 4)
    }
    useEffect(() => {
        const interval = setInterval(moveToNext, 1000)
        return () => clearInterval(interval)
    }, [currentindex])

    return (
        <div className='w-full py-16 px-4 text-center'>
            <div className='mx-w-[1240px] mx-auto grid md:grid-cols-4 sm:grid-cols-2'>
                <div className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[150px] text-center text-white py-2 px-4 font-semibold'>UI Design</div>
                <div className='border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[150px] text-center bg-[#09090b]'>All</div>
                <div className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[150px] text-center text-white py-2 px-4 font-semibold'>Web Designs</div>
                <div className='border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[150px] text-center bg-[#09090b]'>App</div>
            </div>
            <div className='mx-w-[1240px] relative'>
                {containers()}
                <button className="carousel-prev absolute top-8 left-0 transform  bg-red-600" onClick={moveToPrev}>Previous</button>
                <button className="carousel-next absolute top-8 right-0 transform bg-red-600" onClick={moveToNext}>Next</button>
            </div>
        </div>
    )
}

export default Project