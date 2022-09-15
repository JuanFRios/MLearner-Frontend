import { Field } from 'formik';
import React from 'react';

const InputLesson = ({ text, name, placeholder, type, required, accept }) => (
  <label htmlFor={name} className='flex flex-col w-full my-2'>
    <span className='text-2xl'>{text}</span>
    {type === 'select' && (
      <Field as='select' name={name} id={name}>
        <option value={false}>No</option>
        <option value>Si</option>
      </Field>
    )}
    {type === 'textarea' && (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={5}
        required={required}
        autoComplete='off'
        className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
      />
    )}
    {type !== 'textarea' && type !== 'select' && (
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        accept={type === 'file' ? accept : ''}
        required={required}
        autoComplete='off'
        className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
      />
    )}
  </label>
);

export default InputLesson;
