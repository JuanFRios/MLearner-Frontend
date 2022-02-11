/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
import { getLessonsByModule } from 'actions/lessons';
import { getContentModule } from 'actions/modules';
import { LessonsModal } from 'pages/LessonsModal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModulesStatus } from 'constants/Modules';

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
  let anchoModulo;
  let medidatexto;
  let medidaIcono;

  function onClick() {
    setShowModal(true);
    dispatch(getContentModule());
    dispatch(getLessonsByModule(idModule));
  }

  if (tamaño === 'moduleLg') {
    anchoModulo = '';
    medidatexto = 'w-128 mt-16';
    medidaIcono = 'pl-64';
  } else {
    anchoModulo = 'w-96';
    medidatexto = 'w-64 mt-12';
    medidaIcono = 'pl-12';
  }

  switch (activo) {
    case ModulesStatus.passed:
      icono = 'iconoir:gym';
      color = 'good';
      break;
    case ModulesStatus.fail:
      icono = 'bx:bxs-lock';
      color = 'bad';
      break;
    case ModulesStatus.inProgress:
      icono = 'fluent:play-12-filled';
      color = 'enable';
      break;
    case ModulesStatus.blocked:
      icono = 'bx:bxs-lock';
      color = 'locked';
      break;
    default:
      icono = '';
      color = '';
      break;
  }

  return (
    <div className={anchoModulo}>
      <div
        className='flex flex-col items-center my-2 text-white w-full'
        onClick={() => {
          onClick();
        }}
        role='button'
        tabIndex='0'
      >
        <div className={`${tamaño} ${color} flex m-2 py-4`}>
          <div className='flex flex-col'>
            <div className='flex'>
              <p className='puntaje text-3xl font-bold px-8 pt-2'>{`${puntajeObtenido}/${puntajetotal}`}</p>
            </div>
            <div className={`${medidatexto} flex`}>
              <p className='text-2xl font-bold px-8 py-2'>{nombre}</p>
            </div>
          </div>
          <div className={`${medidaIcono} flex items-end py-2`}>
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
};
