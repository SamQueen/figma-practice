import React from 'react'
import Button from './Button'

const PlanTable = ({ name, price, includedFeatures, unincludedFeatures, show }) => {
  return (
    <div 
        className={`w-[320px] lg:w-1/3 border-2 border-slate-400 border-opacity-45 rounded-md mx-auto px-5 xl:px-16 py-10 
            ${!show && 'hidden'}`}
    >
        
        <h3 className='text-2xl mb-10'>{name}</h3>

        <div className='flex items-baseline'>
            <h1 className='mb-10'>${price}</h1>
            <p className='text-lg mb-10 ml-2'> /month</p>
        </div>

        <ul className='w-full text-start mb-10'>
            {includedFeatures.map((feature, index) => (
                <li key={index} className='mb-2'>✔️ {feature}</li>
            ))}

            {unincludedFeatures.map((feature, index) => (
                <li key={index} className='mb-2 text-gray-400 pl-6'>{feature}</li>
            ))}
        </ul>

        {(name === 'Professional') ? (
            <Button text="Get Started" type="teriary"/>
        ) : (
            <Button text="Get Started" type="transparent"/>
        )}
    </div>
  )
}

export default PlanTable