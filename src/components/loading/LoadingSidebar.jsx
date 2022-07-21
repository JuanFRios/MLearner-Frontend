import React from 'react';

const LoadingSidebar = () => {
  console.log('first');
  return (
    <div className='flex'>
      <div className='backgroudSB w-80 fixed h-full flex flex-col items-center content-center  z-20 '>
        <div className='px-8 py-12 w-full'>
          <div className='flex flex-col items-center w-full'>
            <div className='h-32 bg-slate-50 w-32 my-2 rounded-full' />
            <div className='h-7 bg-slate-50 w-full my-2 rounded-full' />
            <div className='h-5 bg-slate-50 w-full my-2 rounded-full' />
            <div className='h-10 bg-slate-50 w-full mt-10 rounded-full' />
            <div className='h-10 bg-slate-50 w-full mt-4 rounded-full' />
            <div className='h-10 bg-slate-50 w-full mt-4 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSidebar;
