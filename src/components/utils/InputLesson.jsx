import React from 'react';

const InputLesson = ({ text, name, placeholder, type, required }) => (
  <label htmlFor={name} className='flex flex-col w-full my-2'>
    <span className='text-2xl'>{text}</span>
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      accept={type === 'file' ? 'image/png' : ''}
      required={required}
      autoComplete='off'
      className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
    />
  </label>
);

export default InputLesson;
