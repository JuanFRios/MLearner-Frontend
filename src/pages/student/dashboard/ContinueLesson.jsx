import { getLessonContent } from 'actions/lessons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ContinueLesson = ({ idLesson }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeLesson } = useSelector((state) => state.lessons);
  useEffect(async () => {
    await dispatch(getLessonContent(idLesson));
  }, []);

  const className = `flex h-64 py-1`;

  function onContinue(event) {
    event.preventDefault();
    navigate(`/lesson/${idLesson}`);
  }

  return (
    <div className='flex flex-col justify-around items-center mt-8'>
      <div
        className={className}
        style={{
          background: `url(${activeLesson?.leccion.modulo.urlImagen})`,
          borderRadius: '60px',
          boxSizing: 'border-box',
          width: '800px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex flex-col self-baseline mt-8 pt-5 ml-3 pl-2'>
          <div className='w-48'>
            <p className='text-3xl font-bold'>
              {activeLesson?.leccion.modulo.nombre}
            </p>
          </div>
          <div className='w-fit mt-2'>
            <p className='text-lg font-medium'>
              {activeLesson?.leccion.titulo}
            </p>
          </div>
        </div>
        <div className='ml-52 pl-40 mt-48'>
          <button
            type='button'
            onClick={onContinue}
            className='flex bg-gray-100 text-2xl font-bold px-4 rounded-3xl items-center p-1 mr-6 focus:outline-none hover:scale-105'
          >
            <span className='iconify' data-icon='fluent:play-12-filled' />
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
