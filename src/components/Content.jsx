/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
import { getLessonsByModule } from 'actions/lessons';
import { getContentModule } from 'actions/modules';
import { LessonsModal } from 'pages/LessonsModal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Content = ({
  nombre,
  idModule,
  puntajeObtenido,
  puntajetotal,
  tamaño,
  activo,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  let icono;
  let color;
  let aux;

  function onClick() {
    setShowModal(true);
    dispatch(getContentModule());
    dispatch(getLessonsByModule(idModule));
  }

  if (activo === false) {
    icono = 'bx:bxs-lock';
    color = 'locked';
  } else {
    icono = 'iconoir:gym';
    color = 'enable';
  }

  if (tamaño === 'moduleLg') {
    aux = (
      <div>
        <div
          className='flex flex-col items-center my-2 text-white w-full'
          onClick={() => {
            onClick();
          }}
          role='button'
          tabIndex='0'
        >
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
        <LessonsModal
          showModal={showModal}
          setShowModal={setShowModal}
          module={nombre}
        />
      </div>
    );
  } else {
    aux = (
      <div className='w-96'>
        <div
          className='flex flex-col my-8 text-white w-full'
          onClick={() => {
            onClick();
          }}
          role='button'
          tabIndex='0'
        >
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
        <LessonsModal
          showModal={showModal}
          setShowModal={setShowModal}
          module={nombre}
        />
      </div>
    );
  }
  return <div>{aux}</div>;
};
