import { Field } from 'formik';
import React from 'react';

const InputLessonCode = ({ text, name, placeholder }) => (
  <label htmlFor={name} className='flex flex-row w-full my-3'>
    <div className='w-2/12 bg-slate-50 rounded-xl mx-2 flex items-center justify-center'>
      <span className='text-2xl text-center'>{text}</span>
    </div>
    <div className='bg-slate-50 w-full p-3'>
      <Field
        id={name}
        as='textarea'
        name={name}
        placeholder={placeholder}
        rows={5}
        autoComplete='off'
        className='appearance-none border-b border-dark_blue_2 bg-slate-50 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
      />
    </div>
  </label>
);

export default InputLessonCode;
