import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-3 w-full'>
      <div className='grid sm:grid-cols-2 max-w-[800px] mx-auto'>
        <div className='max-w-[400px] mx-auto'>
            <img src={Laptop} alt="laptop" />
        </div>
        <div className='py-3 px-2'>
            <p className=' font-bold text-lg md:text-xl text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='font-bold py-2 text-2xl md:text-3xl'>Manage Data Analytics Centrally</h1>
            <p className='text-justify md:text-lg'>Lorem ipsum dolor, sit amet consatim, iemorem quidem eum reprehenderit porro, et voluptatum temporibus perferendis, exercitationem sequi sint deleniti delectus quo modi, vitae laudantium! Odit nobis corporis aliquam autem anisum.</p>
            <div className='flex justify-around sm:justify-start'>
                <button className='px-3 py-2 text-[#00df9a] bg-[#000300] font-semibold rounded-lg mt-6'>Get Started</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Analytics
