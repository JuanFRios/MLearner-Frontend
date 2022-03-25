import React from 'react';

const LoadingHome = () => (
  <div className='animate-pulse flex flex-col ml-36 space-x-4 w-190'>
    <div className='flex w-full justify-end pr-10 mt-4'>
      <div className='h-20 bg-slate-200 w-36 mx-2 rounded-full' />
      <div className='h-20 bg-slate-200 w-36 mx-2 rounded-full' />
      <div className='h-20 bg-slate-200 w-36 mx-2 rounded-full' />
    </div>
    <div className='flex flex-col w-full justify-end pr-10 my-4'>
      <div className='h-10 bg-slate-200 w-96 mx-2 rounded-full ml-60' />
      <div className='flex justify-center w-full'>
        <div className='h-52 bg-slate-200 w-140 mx-2 rounded-3xl ml-48 mt-10' />
      </div>
    </div>
    <div className='flex flex-col w-full justify-end pr-10 mt-4'>
      <div className='h-10 bg-slate-200 w-96 mx-2 rounded-full ml-60' />
      <div className='flex justify-center w-full'>
        <div className='h-52 bg-slate-200 w-150 mx-2 rounded-3xl ml-48 mt-10' />
      </div>
      <div className='flex justify-center'>
        <div className='flex justify-between w-150 ml-48'>
          <div className='h-52 bg-slate-200 w-80 rounded-3xl  mt-10' />
          <div className='h-52 bg-slate-200 w-80 rounded-3xl  mt-10' />
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='h-52 bg-slate-200 w-150 mx-2 rounded-3xl ml-48 mt-10' />
      </div>
    </div>
  </div>
);

export default LoadingHome;
