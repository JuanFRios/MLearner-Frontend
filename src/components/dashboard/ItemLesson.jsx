import React from 'react';
import { LessonType, LessonStatus } from 'constants/Lesson';

const ItemLesson = ({ type, status }) => {
  let iconType;
  let iconStatus;
  let lessonStatusClass = 'iconify lesson-status-icon';

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

  switch (status) {
    case LessonStatus.blocked:
      iconStatus = 'jam:padlock';
      break;
    case LessonStatus.inProgress:
      iconStatus = 'jam:padlock-open';
      break;
    case LessonStatus.seen:
      iconStatus = 'akar-icons:circle-check-fill';
      lessonStatusClass = 'iconify lesson-status-icon green';
      break;
    default:
      iconStatus = 'jam:padlock';
      break;
  }
  return (
    <div className='flex flex-col py-2'>
      <div className='flex justify-between w-140 py-2 items-center'>
        <div className='flex items-center'>
          <span className='iconify big-icon' data-icon={iconType} />
          <p className='text-2xl pl-3'>
            ¿Que es ingeniería de características?
          </p>
        </div>
        <span className={lessonStatusClass} data-icon={iconStatus} />
      </div>
      <hr />
    </div>
  );
};

export default ItemLesson;
