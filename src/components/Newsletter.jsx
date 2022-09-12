import React from 'react'

const Newsletter = () => {
    return (
        <div className='text-white py-8 px-3'>
            <div className='max-w-[1000px] mx-auto grid md:grid-cols-2 space-y-2 justify-around items-center'>
                <div>
                    <h2 className=' font-bold text-2xl  text-center md:text-left'>Want Tips & Trics to optimise your flow?</h2>
                    <p className='text-lg text-center md:text-left md:text-md'>Sign-up to our newsletter to stay updated.</p>
                </div>
                <div>
                    <form className='flex flex-col md:flex-row md:space-x-1 md:items-center space-y-2 mt-4 md:mt-2'>
                        <input type="text" className='w-[380px] md:w-[250px] lg:w-[280px] mx-auto p-1  rounded-lg ' placeholder='Enter Your Email' />
                        <button type='submit' className='px-3 py-2 bg-[#00df9a] text-black w-[130px] rounded-lg  font-semibold mx-auto'>Notify Me</button>
                    </form>
                    <p className='text-center mt-2'>We care about your privacy. Read our <span className='underline text-[#00df9a]'>Privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
