import React, { useState, useEffect } from 'react'
import one from '../Components/Images/alarm1.PNG'
import netflix from '../Components/Images/netflix-web.png'
import alarm from '../Components/Images/Alarm.png'
import whatsapp from '../Components/Images/whatsapp-phone.png'
import capture from '../assets/phoneFrame.png'
// import netflix from '../Components/Images/netflix-web.PNG'
import html from '../Components/Images/html&css.png'
import Js from '../Components/Images/Js.png'
import figma from '../Components/Images/figma.png'
import firebase from '../Components/Images/firebase.png'
import boostrap from '../Components/Images/boostrap.png'
import tailwind from '../Components/Images/tailwind.png'
import react from '../Components/Images/react.png'
import node from '../Components/Images/node.png'
import django from '../Components/Images/django.png'
import { Link } from 'react-router-dom'


const Project = () => {
    const [currentindex, setcurrentindex] = useState(0)

    const containers = () => {
        switch (currentindex) {
            case 0:
                return (
                    <div className='w-full flex flex-wrap gap-4 items-center justify-center'>
                        <div className='w-[500px] relative group'>
                            <img className='h-[250px]' src={netflix} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={alarm} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={whatsapp} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] h-[250px] relative group bg-black flex items-center justify-center flex-col'>
                            <img className='w-[200px] h-[400px] transform rotate-90' src={capture} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className='w-full flex flex-wrap gap-4 items-center justify-center'>
                        <div className='w-[500px] relative group'>
                            <img className='h-[250px]' src={netflix} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={alarm} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={whatsapp} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] h-[250px] relative group bg-black flex items-center justify-center flex-col'>
                            <img className='w-[200px] h-[400px] transform rotate-90' src={capture} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className='w-full flex flex-wrap gap-4 items-center justify-center'>
                        <div className='w-[500px] relative group'>
                            <img className='h-[250px]' src={netflix} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={alarm} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={whatsapp} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] h-[250px] relative group bg-black flex items-center justify-center flex-col'>
                            <img className='w-[200px] h-[400px] transform rotate-90' src={capture} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className='w-full flex flex-wrap gap-4 items-center justify-center'>
                        <div className='w-[500px] relative group'>
                            <img className='h-[250px]' src={netflix} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={alarm} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] relative group'>
                            <img className='w-[500px] h-[250px]' src={whatsapp} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
                            </div>
                        </div>
                        <div className='w-[500px] h-[250px] relative group bg-black flex items-center justify-center flex-col'>
                            <img className='w-[250px] h-[550px] transform' src={capture} alt="netflix" />
                            <div className='absolute  gap-4 text-center items-center justify-center top-0 bg-[rgba(0,0,0,0.4)] w-full h-full hidden group-hover:flex'>
                                <button className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[100px] h-[40px] text-center text-white py-2 px-4 font-semibold'>
                                    <a href="https://simplysekinah-alarm.vercel.app/">View</a>
                                </button>
                                <button className=' border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[100px] h-[40px] text-center bg-[#09090b]'>
                                    <a href="https://github.com/Simplysekinah/Alarm-timmer">Git</a>
                                </button>
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
        const interval = setInterval(moveToNext, 4000)
        return () => clearInterval(interval)
    }, [currentindex])

    return (
        <div className='w-full py-16 px-4 text-center'>
            <div className='mx-w-[1240px] mx-auto justify-center grid md:grid-cols-4 sm:grid-cols-2'>
                <div className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[150px] text-center text-white py-2 px-4 font-semibold'>UI Design</div>
                <div className='border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[150px] text-center bg-[#09090b]'>
                    <Link to={'/all'} >All</Link>
                </div>
                <div className='bg-gradient-to-r from-[#09090b] to-[#fac271] rounded-md shadow-md hover:from-[#fac271] hover:to-[#09090b] hover:shadow-lg w-[150px] text-center text-white py-2 px-4 font-semibold'>Web Designs</div>
                <div className='border-4 border-[#fac271] rounded-md px-4 py-2 text-white shadow-md font-semibold w-[150px] text-center bg-[#09090b]'>App</div>
            </div>
            <div className='mx-w-[1240px] relative py-4'>
                {containers()}
                <button className="carousel-prev absolute top-8 left-0 transform  bg-red-600" onClick={moveToPrev}>Previous</button>
                <button className="carousel-next absolute top-8 right-0 transform bg-red-600" onClick={moveToNext}>Next</button>
            </div>
            <h1 className=' text-[#fac271] font-bold py-4 text-2xl'>My Skills</h1>
            <div className='   relative flex justify-center py-4 my-2'>
                <div className='  p-2 gap-7 flex flex-wrap shadow-[#fac271] shadow-md w-[600px] items-center justify-center'>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#fac271] shadow-md hover:scale-75 hover:transition-all'>
                        <img className=' w-[70px]' src={html} alt="html" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={boostrap} alt="boostrap" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={tailwind} alt="tailwind" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={Js} alt="Js" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={firebase} alt="firebase" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={react} alt="react" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={node} alt="node" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={django} alt="django" />
                        <p>HTML&CSS</p>
                    </div>
                    <div className='flex items-center bg-gray-200 w-[110px] px-2 py-4 flex-col rounded-tl-2xl rounded-br-2xl h-[125px] shadow-[#09090b] shadow-md hover:scale-75'>
                        <img className=' w-[70px]' src={figma} alt="figma" />
                        <p>HTML&CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project