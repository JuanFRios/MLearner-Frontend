import { LessonType } from 'constants/Lesson';
import React from 'react';

export const LessonTitle = ({ type, title }) => {
  let iconType;
  switch (type) {
    case LessonType.reading:
      iconType = 'bi:file-text';
      break;
    case LessonType.code:
      iconType = 'bi:code-square';
      break;
    case LessonType.quiz:
      iconType = 'ic:outline-quiz';
      break;
    default:
      iconType = 'bi:file-text';
      break;
  }
  return (
    <div className='flex justify-center w-full py-2 items-center'>
      <div className='flex items-center'>
        <span className='iconify big-icon' data-icon={iconType} />
        <p className='text-3xl font-bold px-3'>{title}</p>
      </div>
    </div>
  );
};
