import React from 'react';

const LoadingHomeAdmin = () => {
  console.log('first');
  return (
    <div className='private-container animate-pulse space-x-4'>
      <div className='flex flex-col w-full justify-end pr-10 '>
        <div className='h-10 bg-slate-200 w-64 mx-2 rounded-full' />
        <div className='flex justify-end w-full'>
          <div className='h-10 bg-slate-200 w-36 mx-2 rounded-xl mr-14' />
        </div>
        <div className='flex justify-center w-full'>
          <div className='h-52 bg-slate-200 w-150 mx-2 rounded-3xl ml-20 mt-2' />
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-between w-150 ml-20'>
            <div className='h-52 bg-slate-200 w-80 rounded-3xl  mt-8' />
            <div className='h-52 bg-slate-200 w-80 rounded-3xl  mt-8' />
          </div>
        </div>
        <div className='flex justify-center w-full'>
          <div className='h-52 bg-slate-200 w-150 mx-2 rounded-3xl ml-20 mt-8' />
        </div>
      </div>
    </div>
  );
};

export default LoadingHomeAdmin;
