import React from 'react';

const Select = ({ text, name, placeholder, type, required, accept }) => (
  <label htmlFor={name} className='flex flex-col w-full my-2'>
    <span className='text-2xl'>{text}</span>
    <select
      name={name}
      placeholder={placeholder}
      type={type}
      accept={type === 'file' ? accept : ''}
      required={required}
      autoComplete='off'
      className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
    >
      <option value=''>Elige una opción</option>
      <option value>Sí</option>
      <option value={false}>No</option>
    </select>
  </label>
);

export default Select;
