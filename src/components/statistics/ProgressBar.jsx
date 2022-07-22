import React from 'react';

const ProgressBar = ({ porcentaje }) => (
  <div className='flex items-center w-full'>
    <div className='w-36 bg-emerald-100 h-3 rounded-full'>
      <div
        className='bg-green-500 h-3 rounded-full'
        style={{ width: `${porcentaje}%` }}
      />
    </div>
    <p className='text-green-500 w-10 text-xl text-center ml-2'>
      {porcentaje}%
    </p>
  </div>
);

export default ProgressBar;
