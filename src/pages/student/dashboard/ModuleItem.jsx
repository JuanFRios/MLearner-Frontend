/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { getLessonsByModule } from 'actions/lessons';
import { getContentModule, resetModule } from 'actions/modules';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModulesStatus } from 'constants/Modules';
import { LessonsModal } from 'pages/student/dashboard/lessons-list-modal/LessonsModal';

export const ModuleItem = ({
  nombre,
  idModule,
  puntajeObtenido,
  puntajetotal,
  tamaño,
  activo,
  imagen,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  let icono;
  let color;
  let background;
  let className = '';
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
    onPlay();
  }

  async function onReset() {
    const response = await dispatch(resetModule(idModule));
    if (response) {
      window.location.reload(true);
    }
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
      background = `linear-gradient(180deg, rgba(146, 227, 169, 0.51) 0%, rgba(20, 82, 38, 0.88) 100%), url(${imagen})`;
      color = '';
      className = 'good';
      evento = () => onReforce();
      break;
    case ModulesStatus.fail:
      icono = 'ooui:reload';
      className = 'bad';
      background = `linear-gradient(180deg, rgba(243, 82, 82, 0.61) 0%, rgba(153, 27, 27, 0.86) 100%), url(${imagen})`;
      color = '';
      evento = () => onReset();
      break;
    case ModulesStatus.inProgress:
      icono = 'fluent:play-12-filled';
      background = `url(${imagen})`;
      color = '';
      className = 'enable';
      evento = () => onPlay();
      break;
    case ModulesStatus.blocked:
      icono = 'bx:bxs-lock';
      background = `linear-gradient(180deg, rgba(131, 136, 143, 0.59) 0%, rgba(13, 9, 9, 0.84) 100%), url(${imagen})`;
      color = 'rgba(249, 250, 251, 0.54)';
      break;
    default:
      icono = '';
      color = '';
      break;
  }

  return (
    <div className={anchoModulo}>
      <div className='flex flex-col items-center my-2 text-white w-full'>
        <div
          className={`${tamaño} ${className} flex py-4`}
          style={{
            background,
            color,
            backgroundSize: 'center',
            backgroundPosition: 'center',
            objectFit: 'cover',
          }}
        >
          <div className='flex flex-col'>
            <div
              className='flex'
              onClick={() => {
                if (activo !== ModulesStatus.fail) {
                  onPlay();
                }
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
