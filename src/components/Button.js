import React from 'react'
import Google from '../assets/google.webp';

const Button = ({ text, type }) => {
  const primaryColor = '#482BE7';
  const secondaryColor = '#25DAC5';
  const tertiaryColor = '#E93A7D';
  let buttonColor = ''

  if (type === 'primary') {
    buttonColor = primaryColor;
  }
  else if (type === 'secondary') {
    buttonColor = secondaryColor;
  }
  else {
    buttonColor = tertiaryColor;
  }
    
  const googleButton = (
    <div className="px-5 border border-black rounded-[100px] flex justify-center items-center cursor-pointer">
        <img className="h-10" src={Google} alt='Google Logo' />
        <p className='text-black'>{text}</p>
    </div>
  );

  const transparentButton = (
    <div className="px-5 py-2 border-2 border-slate-400 border-opacity-50 rounded-[100px] cursor-pointer">
        <p className='text-white'>{text}</p>
    </div>
  );

  if (type === 'google') {
    return googleButton;
  }

  if (type === 'transparent') {
    return transparentButton;
  }

  return (
    <div 
      style={{ backgroundColor: buttonColor }}
      className="px-5 py-2 rounded-[100px] cursor-pointer"
    >
        <p className='text-white'>{text}</p>
    </div>
  )
}

export default Button