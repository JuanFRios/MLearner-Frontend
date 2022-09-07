/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import { Field } from 'formik';
import React from 'react';

const LessonInput = ({
  text,
  name,
  placeholder,
  type,
  errors,
  touched,
  select,
  options,
  textarea,
}) => (
  <>
    <label htmlFor={name} className='flex flex-col w-full my-2'>
      <span className='text-2xl'>{text}</span>
      {!select ? (
        textarea ? (
          <Field
            id={name}
            name={name}
            placeholder={placeholder}
            as='textarea'
            rows={5}
            autoComplete='off'
            className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
          />
        ) : (
          <Field
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            autoComplete='off'
            className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
          />
        )
      ) : (
        <Field as='select' name={name} id={name}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Field>
      )}
    </label>
    {errors[name] && touched[name] ? (
      <span className='text-red-500'>{errors[name]}</span>
    ) : null}
  </>
);

export default LessonInput;
