// import { getLessonContent } from 'actions/lessons';
import ItemContent from 'components/lesson/ItemContent';
import { LessonTitle } from 'components/lesson/LessonTitle';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  // let lesson;

  // useEffect(async () => {
  //   lesson = await dispatch(getLessonContent(id));
  // }, []);

  console.log(id);
  return (
    <div className='flex flex-col w-190 px-20'>
      <div className='flex items-center my-10'>
        <span className='iconify big-icon' data-icon='ep:close-bold' />
        <p className='text-3xl font-bold ml-9'>
          Módulo: ingeniería de características
        </p>
      </div>
      <div className='container border-2 p-6'>
        {/* {lesson && (
          <ItemLesson
            type={lesson.leccion.tipo}
            title={lesson.leccion.pregunta.enunciado}
          />
          )} */}
        <LessonTitle type='QUIZ' title='¿Qué es Python?' />
        <ItemContent type='g' />
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
