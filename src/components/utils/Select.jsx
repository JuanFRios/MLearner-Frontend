import React from 'react';

const Select = ({ text, name, placeholder, type, required, options }) => (
  <label htmlFor={name} className='flex flex-col w-full my-2'>
    <span className='text-2xl'>{text}</span>
    <select
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      autoComplete='off'
      className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
    >
      {options.map((option) => (
        <option key={`${option.value}${option.label}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

export default Select;
