import LessonContent from 'components/lesson/LessonContent';
import React from 'react';

const LessonPreview = () => {
  const lessonPreviewr = JSON.parse(localStorage.getItem('lessonPreview'));
  return (
    <div className='flex flex-col w-190 px-20'>
      <LessonContent lesson={lessonPreviewr} lostLives={0} />
    </div>
  );
};

export default LessonPreview;
