import React, { useState } from 'react'
import BarsIcon from '../assets/bars-icon.svg';
import XIcon from '../assets/x-icon.svg';

const TopNav = () => {
    const [toggleMobileNav, setToggleMobileNav] = useState(false);
    
    const navOptions = [
        {
            name: 'Home',
            url: '#hero-section',
        },
        {
            name: 'Features',
            url: '#features-section',
        },
        {
            name: 'Pricing',
            url: '#pricing-section',
        },
        {
            name: 'Our Team',
            url: '#team-section',
        },
        {
            name: 'Contact',
            url: '#pricing-section',
        },
    ];

    return (
        <div className='w-screen md:w-auto px-10'>
            <ul className='hidden md:flex'>
                {navOptions.map((option, index) => (
                    <li key={index} className='py-2 px-6 text-[#FFFFFF] hover:text-blue-500 duration-500'>
                        <a href={option.url}>{option.name}</a>
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
                        <li 
                            key={index} 
                            className='py-2 px-6  cursor-pointer text-[#FFFFFF] hover:bg-gray-900 rounded-md duration-500'
                            onClick={() => setToggleMobileNav(false)}
                        >
                            <a href={option.url}>{option.name}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TopNav