import React from 'react';

const InformationProgress = ({ icono, color, titulo, informacion }) => (
  <div className='px-2'>
    <div className='info flex items-center text-xl font-bold p-1'>
      <div className='p-1'>
        <span className={`iconify ${color} text-5xl`} data-icon={icono} />
      </div>
      <div className='flex flex-col items-center pr-2'>
        <p className='m-1'>{titulo}</p>
        <p>{informacion}</p>
      </div>
    </div>
  </div>
);

export default InformationProgress;
