import React from 'react';

export const Content = () => (
  <div className=''>
    <p className='text-2xl font-bold '>Contenido del curso</p>
    <div className='flex flex-col justify-around items-center mt-8 text-white'>
      <div className='moduleLg enable flex'>
        <div className='flex flex-col self-baseline mt-4 pt-4 ml-4 pl-5'>
          <p className='text-3xl font-bold'>32/32</p>
          <div className='mt-16'>
            <p className='text-2xl font-bold'>Introducción a Python</p>
          </div>
        </div>
        <div className='flex items-center mt-28 ml-52 pl-52'>
          <span className='iconify text-5xl ' data-icon='iconoir:gym' />
        </div>
      </div>
    </div>
    <div className='flex'>
      <div className='flex flex-col justify-around mt-8 ml-40 text-white'>
        <div className='moduleSm bad flex'>
          <div className='flex flex-col self-baseline my-2 py-4 ml-4 pl-5'>
            <p className='text-3xl font-bold '>10/32</p>
            <div className='mt-12 flex'>
              <p className='w-40 text-2xl font-bold justify-items-center'>
                Ingeniería de Características
              </p>
              <div className='items-center ml-28 pt-4'>
                <span className='iconify text-5xl' data-icon='whh:repeat' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-around mt-8 ml-9 text-white'>
        <div className='moduleSm locked flex'>
          <div className='flex flex-col self-baseline my-2 py-4 ml-4 pl-5'>
            <p className='text-3xl font-bold '>0/32</p>
            <div className='mt-12 flex'>
              <p className='w-44 text-2xl font-bold justify-items-center'>
                Reducción de dimensionalidad
              </p>
              <div className='items-center ml-20 pt-4'>
                <span className='iconify text-5xl ' data-icon='bx:bxs-lock' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-around items-center mt-8 text-white'>
      <div className='moduleLg locked flex'>
        <div className='flex flex-col self-baseline mt-4 pt-4 ml-4 pl-5'>
          <p className='text-3xl font-bold'>0/32</p>
          <div className='mt-16'>
            <p className='text-2xl font-bold'>Introducción a Python</p>
          </div>
        </div>
        <div className='flex items-center mt-28 ml-52 pl-52'>
          <span className='iconify text-5xl ' data-icon='bx:bxs-lock' />
        </div>
      </div>
    </div>
  </div>
);
