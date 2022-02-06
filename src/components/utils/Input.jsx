import React from 'react';

const Input = ({ text, name, placeholder, type, required }) => (
  <label htmlFor={name} className='flex flex-col w-3/4'>
    <span>{text}</span>
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      autoComplete='off'
      className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
    />
  </label>
);

export default Input;
