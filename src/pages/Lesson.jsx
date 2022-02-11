import { getLessonContent } from 'actions/lessons';
// import ItemContent from 'components/lesson/ItemContent';
import LessonContent from 'components/lesson/LessonContent';
import ProgressBar from 'components/lesson/ProgressBar';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const Lesson = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);

  useEffect(async () => {
    const lessonResponse = await dispatch(getLessonContent(id));
    setLesson(lessonResponse);
  }, []);

  function onClick(event) {
    event.preventDefault();
    navigate('/home');
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
      <ProgressBar percent='50' />
      <div className='container border-2 p-6'>
        {lesson && <LessonContent lesson={lesson.leccion} />}
        {/* <LessonTitle type='QUIZ' title='¿Qué es Python?' /> */}
        {/* <ItemContent type='g' /> */}
      </div>
      <div className='flex justify-end mt-10'>
        <button type='button' className='btn btn-blue'>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Lesson;
