import React from 'react';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className='flex flex-col w-190 px-20'>
      <div className='flex items-center my-10'>
        <span className='iconify big-icon' data-icon='ep:close-bold' />
        <p className='text-3xl ml-9'>Módulo: ingeniería de características</p>
      </div>
      <div className='container border-2 p-6'>
        <p>hola</p>
      </div>
      <div className='flex justify-end mt-10'>
        <button type='button' className='btn btn-blue'>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Lesson;
