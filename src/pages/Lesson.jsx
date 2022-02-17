import { getLessonContent, resetLessonStatus } from 'actions/lessons';
// import ItemContent from 'components/lesson/ItemContent';
import LessonContent from 'components/lesson/LessonContent';
import ProgressBar from 'components/lesson/ProgressBar';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Lesson = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeLesson, selectedOption } = useSelector(
    (state) => state.lessons
  );
  const [lesson, setLesson] = useState(null);

  useEffect(async () => {
    const lessonResponse = await dispatch(getLessonContent(id));
    setLesson(lessonResponse);
  }, []);

  function onClick(event) {
    event.preventDefault();
    dispatch(resetLessonStatus());
    navigate('/home');
  }

  function onContinue(event) {
    event.preventDefault();
    navigate(`/lesson/${activeLesson.idSiguienteLeccion}`);
    window.location.reload(true);
  }

  return (
    <div className='flex flex-col w-190 px-20'>
      <div className='flex items-center my-10'>
        <button type='button' onClick={onClick}>
          <span className='iconify big-icon' data-icon='ep:close-bold' />
        </button>
        {lesson && (
          <p className='text-3xl font-bold ml-9'>
            Modulo: {lesson.leccion.modulo.nombre}
          </p>
        )}
      </div>
      {lesson && <ProgressBar seenLessons={3} totalLessons={32} />}
      <div className='w-full max-h-screen border-2 p-6'>
        {lesson && <LessonContent lesson={lesson.leccion} />}
        {/* <LessonTitle type='QUIZ' title='¿Qué es Python?' /> */}
        {/* <ItemContent type='g' /> */}
      </div>
      <div className='flex justify-end mt-10'>
        {activeLesson &&
          activeLesson.leccion.vidasTotales - activeLesson.vidasPerdidas ===
            0 && (
            <button type='button' className='btn btn-blue' onClick={onContinue}>
              Continuar
            </button>
          )}
        {activeLesson &&
          activeLesson.leccion.vidasTotales - activeLesson.vidasPerdidas >
            0 && (
            <button
              disabled={!selectedOption}
              type='button'
              className='btn bg-green-500 text-white shadow-lg disabled:bg-gray-300 disabled:text-gray-600'
              onClick={onContinue}
            >
              Validar
            </button>
          )}
      </div>
    </div>
  );
};

export default Lesson;
