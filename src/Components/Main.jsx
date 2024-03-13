import React from 'react'
import { ReactTyped, Typed } from "react-typed";

const Main = () => {
    return (
        <div>
            <div className='max-w-[800px] flex flex-col text-center justify-center mx-auto h-[80vh]'>
                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>
                <div className='text-white text-xl font-semibold py-2'>I'm a</div>
                <ReactTyped
                    className='text-white md:text-5xl sm:text-4xl text-xl py-4 font-bold pl-2 md:pl-4'
                    strings={['FULL STACK WEB DEVELOPER', 'UI/UX DESIGNER']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop />
            </div>
        </div>
    )
}

export default Main