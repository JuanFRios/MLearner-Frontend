import React from 'react';
import { LessonTitle } from 'components/lesson/LessonTitle';
import QuizLesson from 'components/lesson/QuizLesson';
import Live from 'components/lesson/Live';
import { LessonType } from 'constants/Lesson';
import ReadingCodeLesson from 'components/lesson/ReadingCodeLesson';
import Compiler from 'components/lesson/Compiler';

const LessonContent = ({ lesson, lostLives }) => {
  const livesItems = [];
  for (let i = 0; i < lesson.vidasTotales - lostLives; i += 1) {
    livesItems.push(<Live key={i} />);
  }
  for (let i = 0; i < lostLives; i += 1) {
    livesItems.push(<Live key={`${i}L`} type='LOST' />);
  }
  return (
    <div className='flex flex-col max-h-128 overflow-y-auto'>
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
