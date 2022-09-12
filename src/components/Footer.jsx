import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaGithubSquare,
    FaTwitterSquare
} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-8 grid md:grid-cols-3 text-white'>
            <div className='flex flex-col '>
                <h1 className=' font-bold text-3xl text-[#00df9a]'>React</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur aperiam animi minus omnis natus sapiente? Commodi cum odit ea.</p>
                <div className='flex flex-row justify-around w-[80%] mx-auto my-3 py-3'>
                    <FaFacebookSquare size={30} />
                    <FaDribbbleSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                </div>
            </div>
            <div className='grid grid-cols-3 py-8 md:col-span-2 '>
                <div>
                    <ul className='space-y-2 text-center'>
                        <li>Solutions</li>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-2 text-center'>
                        <li>Support</li>
                        <li>Pricing</li>
                        <li>Documentation</li>
                        <li>Guides</li>
                        <li>Api Status</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-2 text-center'>
                        <li>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Partners</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
