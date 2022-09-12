import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav]=useState(true);

    const handleNav = ()=>{
        setNav(!nav)
    }
    return (
        <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-3 '>
            <h1 className='text-center font-bold text-3xl text-[#00df9a]'>React</h1>
            <ul className='sm:flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Companies</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='sm:hidden'>
                {!nav? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25} />}
                
            </div>
            <div className={!nav?'fixed left-0 top-0 border-r border-r-gray-900 w-[60%] h-full bg-[#000300] ease-in-out duration-500  sm:hidden':'fixed left-[-100%]  sm:hidden'}>
                <h1 className='text-left font-bold text-3xl text-[#00df9a] mt-6 ml-3'>React</h1>

                <ul className='pt-[3rem] '>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Companies</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
