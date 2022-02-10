import useFormData from 'hooks/useFormData';
import React from 'react';

const QuizLesson = ({ question }) => {
  const { form, formData, updateFormData } = useFormData();
  console.log(formData);
  console.log(question);

  async function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

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
        onSubmit={onSubmit}
      >
        <div className='flex flex-col my-10 mx-20'>{optionsItems}</div>
      </form>
    </div>
  );
};

export default QuizLesson;
