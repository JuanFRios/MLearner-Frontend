import React from 'react';

const InformationProgress = () => (
  <div className='ml-64 pl-32 pt-12 w-2/12 flex'>
    <div className='info flex items-center text-2xl font-bold p-3'>
      <div className='flex p-1'>
        <span
          className='iconify text-6xl text-sky-400'
          data-icon='grommet-icons:diamond'
        />
      </div>
      <div className='flex flex-col items-center px-2'>
        <p className='m-1'>Puntaje</p>
        <p>10/20</p>
      </div>
    </div>
  </div>
);

export default InformationProgress;
