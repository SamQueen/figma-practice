import React from 'react'
import TopNav from '../components/TopNav'
import Button from '../components/Button'

const HeroSection = () => {
  return (
    <div id="hero-section" className="bg-[url('./assets/hero-image.png')] bg-cover bg-center bg-no-repeat
                    sm:h-auto lg:h-screen">

        <div className='bg-[rgba(47,24,147,0.5)] h-full w-full text-white flex flex-col items-center
                        p-10 xl:p-20 relative overflow-x-hidden'>
            
            <TopNav/>
            
            <p className='text-xl mt-40'>Startup 3</p>
            <h1 className='font-bold tracking-wide mt-5'>Forget About Code</h1>
            <p className='text-lg w-full xl:w-[40%] mt-10'>Startup Framework gives you complete freedom over your creative proocess - you donn't have to think about any techinal aspects. There are no limits and absolutely no codeing.</p>
        
            <div className='mt-10'>
                <Button
                    text='Create an Account'
                    type='primary'
                />
            </div>
        </div>

    </div>
  )
}

export default HeroSection