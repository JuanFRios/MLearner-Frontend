/* eslint-disable no-lone-blocks */
import React from 'react';

export const Content = ({
  nombre,
  puntajeObtenido,
  puntajetotal,
  tamaño,
  activo,
}) => {
  let icono;
  let color;
  let aux;

  if (activo === 'False') {
    icono = 'bx:bxs-lock';
    color = 'locked';
  } else {
    icono = 'iconoir:gym';
    color = 'enable';
  }

  if (tamaño === 'moduleLg') {
    aux = (
      <div className='flex flex-col items-center my-2 text-white'>
        <div className={`${tamaño} ${color} flex m-2 p-4`}>
          <div className='flex flex-col self-baseline'>
            <p className='text-3xl font-bold'>{`${puntajeObtenido}/${puntajetotal}`}</p>
            <div className='mt-20 w-64'>
              <p className='text-2xl font-bold'>{nombre}</p>
            </div>
          </div>
          <div className='flex justify-items-end ml-72 pl-72 items-end'>
            <span className='iconify text-5xl' data-icon={icono} />
          </div>
        </div>
      </div>
    );
  } else {
    aux = (
      <div className='flex flex-col my-8 text-white'>
        <div className={`${tamaño} ${color} flex p-4`}>
          <div className='flex flex-col self-baseline'>
            <p className='text-3xl font-bold'>{`${puntajeObtenido}/${puntajetotal}`}</p>
            <div className='mt-12 flex'>
              <p className='w-40 text-2xl font-bold justify-items-center'>
                {nombre}
              </p>
              <div className='items-center ml-28 pt-4'>
                <span className='iconify text-5xl' data-icon={icono} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>{aux}</div>;
};
