import { changeSelectedOption } from 'actions/lessons';
import useFormData from 'hooks/useFormData';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const QuizLesson = ({ question }) => {
  const { form, formData, updateFormData } = useFormData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.selected) {
      dispatch(changeSelectedOption(formData.selected));
    }
  }, [formData]);

  const optionsItems = question.opciones.map((option) => (
    <div className='flex items-center mb-4' key={option._id}>
      <input
        type='radio'
        name='selected'
        value={option._id}
        id={option._id}
        className='hover:scale-105 h-6 w-6'
      />
      <label
        htmlFor={option._id}
        className='flex items-center cursor-pointer text-xl ml-4'
      >
        {option.opcion}
      </label>
    </div>
  ));

  return (
    <div className='w-full flex flex-col items-start text-justify pt-10'>
      <h1 className='text-2xl pl-10'>{question.enunciado}</h1>
      <form
        ref={form}
        onChange={updateFormData}
        className='w-full h-full flex flex-col justify-around items-center'
      >
        <div className='flex flex-col my-10 mx-20'>{optionsItems}</div>
      </form>
    </div>
  );
};

export default QuizLesson;
