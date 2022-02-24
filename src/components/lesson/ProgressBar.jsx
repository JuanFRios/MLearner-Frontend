/* eslint-disable no-console */
import React from 'react';

const ProgressBar = ({ seenLessons, totalLessons, puntaje }) => {
  console.log(puntaje);
  const percent = (seenLessons / totalLessons) * 100;
  return (
    <div className='flex items-center mb-6'>
      <div className='bg-gray-100 h-6 rounded-full w-11/12'>
        <div
          className='bg-gradient-to-r from-blue-500 to-cyan-500 h-6 rounded-full'
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className='flex items-center justify-end w-1/12'>
        <span
          className='iconify text-3xl text-sky-400'
          data-icon='grommet-icons:diamond'
        />
        <span className='text-sky-400 text-2xl font-bold'>{`${puntaje}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
