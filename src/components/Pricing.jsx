import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Pricing = () => {
  return (
    <div className='py-16 bg-white '>
      <div className='mx-auto max-w-[800px] flex flex-col md:flex-row md:items-center md:justify-between space-y-14'>
        <div className='w-[350px] md:w-[225px] md:translate-y-8 flex flex-col space-y-2  shadow-lg mx-auto rounded-md items-center p-10 pt-0 hover:w-[380px] md:hover:w-[250px] hover:h-[450px] hover:bg-gray-100 transition-all '>
            <div className='w-[100px] -translate-y-10 translate-x-3'><img src={Single} alt="single user"/></div>
            <h1 className='text-2xl font-bold'>Single User</h1>
            <p className='text-3xl font-bold'>$149</p>
            <ul className='w-full py-8 '>
                <li className='w-full text-center mt-2 border-b border-t font-semibold text-[#000300]'>500GB Storage</li>
                <li className='w-full text-center mt-2 border-b  font-semibold text-[#000300]'>One User Allowed</li>
                <li className='w-full text-center mt-2 border-b  font-semibold text-[#000300]'>Send upto 2GB</li>
            </ul>
            <button  className='px-3 py-2 bg-[#00df9a] text-black w-[130px] rounded-lg  font-semibold mx-auto'>Start Trail</button>

        </div>
        <div className='w-[350px] md:w-[250px] md:h-[450px] bg-gray-100  flex flex-col space-y-2  shadow-lg mx-auto rounded-md items-center p-10 pt-0 hover:w-[380px] md:hover:w-[260px] hover:h-[475px] hover:bg-gray-100 transition-all '>
            <div className='w-[100px] -translate-y-10 translate-x-3'><img src={Double} alt="single user"/></div>
            <h1 className='text-2xl font-bold'>Partnership</h1>
            <p className='text-3xl font-bold'>$199</p>
            <ul className='w-full py-8 '>
                <li className='w-full text-center mt-2 border-b border-t font-semibold text-[#000300]'>1TB Storage</li>
                <li className='w-full text-center mt-2 border-b  font-semibold text-[#000300]'>Two Users Allowed</li>
                <li className='w-full text-center mt-2 border-b  font-semibold text-[#000300]'>Send upto 5GB</li>
            </ul>
            <button  className='px-3 py-2 text-[#00df9a] bg-[#000300] w-[130px] rounded-lg  font-semibold mx-auto'>Start Trail</button>

        </div>
        <div className='w-[350px] md:w-[225px]  md:-translate-y-2 flex flex-col space-y-2  shadow-lg mx-auto rounded-md items-center p-10 pt-0 hover:w-[380px] md:hover:w-[250px] hover:h-[450px] hover:bg-gray-100 transition-all '>
            <div className='w-[100px] -translate-y-10 translate-x-0'><img src={Triple} alt="single user"/></div>
            <h1 className='text-2xl font-bold'>Group Users</h1>
            <p className='text-3xl font-bold'>$299</p>
            <ul className='w-full py-8 '>
                <li className='w-full text-center mt-2 border-b border-t font-semibold text-[#000300]'>5TB Storage</li>
                <li className='w-full text-center mt-2 border-b  font-semibold text-[#000300]'>10 Users Allowed</li>
                <li className='w-full text-center mt-2 border-b  font-semibold text-[#000300]'>Send upto 20GB</li>
            </ul>
            <button  className='px-3 py-2 bg-[#00df9a] text-black w-[130px] rounded-lg  font-semibold mx-auto'>Start Trail</button>

        </div>
      </div>
    </div>
  )
}

export default Pricing
