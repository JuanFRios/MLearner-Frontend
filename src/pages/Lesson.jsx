import { getLessonContent } from 'actions/lessons';
import LessonContent from 'components/lesson/LessonContent';
import { ConfirmDialog } from 'components/utils/ConfirmDialog';
import ProgressBar from 'components/lesson/ProgressBar';
import LoadingLesson from 'components/loading/LoadingLesson';
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
  const [showModal, setShowModal] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(async () => {
    setTimeout(async () => {
      const lessonResponse = await dispatch(getLessonContent(id));
      setLesson(lessonResponse);
      setReady(true);
    }, 500);
  }, []);

  function onClick(event) {
    event.preventDefault();
    setShowModal(true);
    // dispatch(resetLessonStatus());
    // navigate('/home');
  }

  function onContinue(event) {
    event.preventDefault();
    navigate(`/lesson/${activeLesson.idSiguienteLeccion}`);
    window.location.reload(true);
  }

  return (
    <>
      {!ready && <LoadingLesson />}
      {ready && (
        <div className='flex flex-col w-190 px-20'>
          <div className='flex items-center my-10'>
            <button
              type='button'
              onClick={onClick}
              className='focus:outline-none hover:scale-110'
            >
              <span
                className='iconify big-icon hover:text-red-500'
                data-icon='ep:close-bold'
              />
            </button>
            {lesson && (
              <p className='text-3xl font-bold ml-9'>
                Modulo: {lesson.leccion.modulo.nombre}
              </p>
            )}
          </div>
          {lesson && <ProgressBar seenLessons={3} totalLessons={32} />}
          <div className='w-full max-h-screen border-2 py-6 pl-6 '>
            {lesson && <LessonContent lesson={lesson.leccion} />}
          </div>
          <div className='flex justify-end my-4'>
            {activeLesson &&
              activeLesson.leccion.vidasTotales - activeLesson.vidasPerdidas ===
                0 && (
                <button
                  type='button'
                  className='btn btn-blue hover:scale-110 focus:outline-none'
                  onClick={onContinue}
                >
                  Continuar
                </button>
              )}
            {activeLesson &&
              activeLesson.leccion.vidasTotales - activeLesson.vidasPerdidas >
                0 && (
                <button
                  disabled={!selectedOption}
                  type='button'
                  className='btn bg-green-500 text-white shadow-lg disabled:bg-gray-300 disabled:text-gray-600 hover:scale-110 focus:outline-none'
                  onClick={onContinue}
                >
                  Validar
                </button>
              )}
          </div>
          <ConfirmDialog showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
    </>
  );
};

export default Lesson;
