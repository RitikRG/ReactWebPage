import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
    return (
        <div className='text-white  pt-[130px]'>
            <div className='max-w-800px h-screen mx-auto flex flex-col'>
                <p className='text-[#00df9a] text-center font-semibold text-sm sm:text-md md:text-xl p-2'>GROWING WITH DATA ANALYTICS</p>
                <h2 className='text-white font-bold text-4xl sm:text-6xl md:text-7xl md:py-5 text-center'>Grow with Data.</h2>
                <div className='flex flex-row space-x-2 round text-xl sm:text-3xl md:text-4xl justify-center font-semibold pt-3'>
                    <p className=''>Fast, Secure financing for </p>
                    <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='text-center py-3 text-gray-500 font-bold text-xl md:text-2xl'>Monitor your Data Analytics to increase revenue for BTB, BTC & SASS platforms</p>
                <button className='bg-[#00df9a] px-3 py-2 rounded-lg w-[120px] my-3 text-md mx-auto md:text-lg md:w-[140px]'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
