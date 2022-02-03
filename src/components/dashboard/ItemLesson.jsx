import React from 'react';

const ItemLesson = () => (
  <div className='flex flex-col py-2'>
    <div className='flex justify-between w-140 py-2 items-center'>
      <div className='flex items-center'>
        <span className='iconify big-icon' data-icon='bi:file-text' />
        <p className='text-2xl pl-3'>¿Que es ingeniería de características?</p>
      </div>
      <span
        className='iconify green'
        data-icon='akar-icons:circle-check-fill'
      />
    </div>
    <hr />
  </div>
);

export default ItemLesson;
