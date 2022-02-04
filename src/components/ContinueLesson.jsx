import React from 'react';

export const ContinueLesson = ({ modulo, leccion }) => (
  <div className='flex flex-col justify-around items-center mt-8'>
    <div className='continue flex'>
      <div className='flex flex-col self-baseline mt-8 pt-5 ml-3 pl-2'>
        <div className='w-48'>
          <p className='text-3xl font-bold'>{modulo}</p>
        </div>
        <div className='w-fit mt-2'>
          <p className='text-lg font-medium'>{leccion}</p>
        </div>
      </div>
      <div className='ml-52 pl-40 mt-48'>
        <button
          type='submit'
          className='flex bg-gray-100 text-2xl font-bold px-4 rounded-3xl items-center p-1 mr-6'
        >
          <span className='iconify' data-icon='fluent:play-12-filled' />
          Continuar
        </button>
      </div>
    </div>
  </div>
);
