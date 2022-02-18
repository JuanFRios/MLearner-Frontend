/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  let evento;
  let anchoModulo;
  let medidatexto;
  let medidaIcono;

  function onPlay() {
    setShowModal(true);
    dispatch(getContentModule());
    dispatch(getLessonsByModule(idModule));
  }

  function onReforce() {
    console.log('reforce lesson');
  }

  function onReset() {
    console.log('reset lesson');
  }

  if (tamaño === 'moduleLg') {
    anchoModulo = 'w-full';
    medidatexto = 'w-128 mt-16';
    medidaIcono = 'pl-64';
  } else {
    anchoModulo = 'w-96 m-4';
    medidatexto = 'w-64 mt-12';
    medidaIcono = 'pl-12';
  }

  switch (activo) {
    case ModulesStatus.passed:
      icono = 'iconoir:gym';
      color = 'good';
      evento = () => onReforce();
      break;
    case ModulesStatus.fail:
      icono = 'bx:bxs-lock';
      color = 'bad';
      evento = () => onReset();
      break;
    case ModulesStatus.inProgress:
      icono = 'fluent:play-12-filled';
      color = 'enable';
      evento = () => onPlay();
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
      <div className='flex flex-col items-center my-2 text-white w-full'>
        <div className={`${tamaño} ${color} flex py-4`}>
          <div className='flex flex-col'>
            <div
              className='flex'
              onClick={() => {
                onPlay();
              }}
              role='button'
              tabIndex='0'
            >
              <p className='puntaje text-3xl font-bold px-8 pt-2'>{`${puntajeObtenido}/${puntajetotal}`}</p>
            </div>
            <div className={`${medidatexto} flex`}>
              <p className='text-2xl font-bold px-8 py-2'>{nombre}</p>
            </div>
          </div>
          <div className={`${medidaIcono} flex items-end py-2`}>
            <button
              type='button'
              onClick={evento}
              className='focus:outline-none hover:scale-110'
            >
              <span className='iconify text-5xl' data-icon={icono} />
            </button>
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
