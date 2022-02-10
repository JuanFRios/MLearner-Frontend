import React from 'react';
import { LessonTitle } from 'components/lesson/LessonTitle';
import QuizLesson from 'components/lesson/QuizLesson';

const LessonContent = ({ lesson }) => {
  console.log(lesson);
  return (
    <div className='flex flex-col'>
      <LessonTitle type={lesson.tipo} title={lesson.titulo} />
      {lesson.pregunta && <QuizLesson question={lesson.pregunta} />}
    </div>
  );
};

export default LessonContent;
