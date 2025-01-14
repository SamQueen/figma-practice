import React from 'react'
import LaptopImage from '../components/LaptopImage'
import Icon1 from '../assets/icon1.png';

const FeaturesSection = () => {
  return (
    <div className="bg-[url('./assets/features-image.png')] bg-cover bg-center bg-no-repeat lg:h-screen">
        <div className='bg-[rgba(47,24,147,0.5)] w-full h-full px-5 py-20 relative flex items-center'>
            <LaptopImage />

            <div className='text-white md:w-[60%] xl:w-[45%] ml-auto lg:mr-[10%] xl:mr-[15%] h-[25rem] flex flex-col justify-between'>
                <div className='text-left'>
                    <h1 className='font-bold'>We Create Something New</h1>
                    <p className='text-lg mt-5'>We have created a new product that will help designers, developers and companies create websites for their startups quickly an easily.</p>
                </div>

                <div className='block md:flex mt-10'>
                    <div className='text-left pr-10'>
                        <img className="mb-5" src={Icon1} alt="Icon"/>
                        <p>30 NEW FEATURE PAGES</p>
                        <p className="mb-5 leading-loose font-extralight" >Startup Framework contians coomponents and complex blocks wchich can easily.</p>
                    </div>

                    <div className='text-left'>
                        <img className="mb-5" src={Icon1} alt="Icon"/>
                        <p>30 NEW FEATURE PAGES</p>
                        <p className="mb-5 leading-loose font-extralight" >Samples will show you the feeling on how to play around using the components.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesSection