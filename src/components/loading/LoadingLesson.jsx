import React from 'react';

const LoadingLesson = () => (
  <div className='animate-pulse flex flex-col space-x-4 w-190'>
    <div className='flex flex-col mx-20'>
      <div className='flex w-full justify-start mt-10'>
        <div className='h-10 bg-slate-200 w-128  rounded-full' />
      </div>
      <div className='flex w-full justify-between mt-10 mb-6'>
        <div className='h-10 bg-slate-200 w-11/12 mr-2 rounded-full' />
        <div className='h-10 bg-slate-200 w-1/12 ml-2 rounded-full' />
      </div>
      <div className='flex flex-col w-full justify-end '>
        <div className='flex justify-center w-full'>
          <div className='h-128 bg-slate-200 w-full mx-2 rounded' />
        </div>
        <div className='flex justify-end w-full'>
          <div className='h-12 bg-slate-200 w-32 mx-2 rounded-3xl mt-6' />
        </div>
      </div>
    </div>
  </div>
);

export default LoadingLesson;
