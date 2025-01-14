import React, { useState } from 'react'
import BarsIcon from '../assets/bars-icon.svg';
import XIcon from '../assets/x-icon.svg';

const TopNav = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);
    const navOptions = ['Home', 'Features', 'Pricing', 'Blog', 'Contact'];

    
    return (
        <div className='w-screen md:w-auto px-10'>
            <ul className='hidden md:flex'>
                {navOptions.map((option, index) => (
                    <li key={index} className='py-2 px-6 text-[#FFFFFF]'>
                        <p>{option}</p>
                    </li>
                ))}
            </ul>

            <img 
                className="h-8 ml-auto cursor-pointer text-white md:hidden" 
                src={BarsIcon} 
                alt=""
                onClick={() => { setToggleMobileNav(!toggleMobileNav) }}
            />

            {/* mobile nav */}
            <div className={`md:hidden bg-[rgba(47,24,147,0.9)] absolute right-0 top-0 h-full min-w-64 p-5 pre-slide ${!toggleMobileNav && 'slide-x-right'}`}>
                <img  
                    className="h-5 cursor-pointer mb-10" 
                    src={XIcon} 
                    alt="" 
                    onClick={() => { setToggleMobileNav(!toggleMobileNav) }}
                />

                <ul className='text-left'>
                    {navOptions.map((option, index) => (
                        <li key={index} className='py-2 px-6  cursor-pointer text-[#FFFFFF] hover:bg-gray-900 rounded-md duration-500'>
                            <p>{option}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TopNav