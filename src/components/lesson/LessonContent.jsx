import React from 'react';
import { LessonTitle } from 'components/lesson/LessonTitle';
import QuizLesson from 'components/lesson/QuizLesson';
import Live from 'components/lesson/Live';
import { LessonType } from 'constants/Lesson';
import ReadingCodeLesson from 'components/lesson/ReadingCodeLesson';
import Compiler from 'components/lesson/Compiler';

const LessonContent = ({ lesson }) => {
  console.log(lesson);
  const livesItems = [];
  for (let i = 0; i < lesson.vidasTotales; i += 1) {
    livesItems.push(<Live key={i} />);
  }
  return (
    <div className='flex flex-col'>
      <LessonTitle type={lesson.tipo} title={lesson.titulo} />
      {lesson.tipo === LessonType.quiz && (
        <QuizLesson question={lesson.pregunta} />
      )}
      {lesson.tipo === LessonType.reading && (
        <ReadingCodeLesson content={lesson.contenido} />
      )}
      {lesson.tipo === LessonType.code && (
        <div className='pt-8'>
          <Compiler />
        </div>
      )}
      <div className='flex'>{livesItems}</div>
    </div>
  );
};

export default LessonContent;
