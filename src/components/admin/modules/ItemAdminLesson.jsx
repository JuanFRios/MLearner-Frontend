import { LessonTypeIcon } from 'constants/Lesson';
import React from 'react';

const ItemAdminLesson = ({ lesson }) => {
  function onEdit() {
    console.log('first');
  }
  function onDelete() {
    console.log('first');
  }
  let icon;
  switch (lesson.tipo) {
    case LessonTypeIcon.reading.type:
      icon = LessonTypeIcon.reading.icon;
      break;
    case LessonTypeIcon.code.type:
      icon = LessonTypeIcon.code.icon;
      break;
    case LessonTypeIcon.quiz.type:
      icon = LessonTypeIcon.quiz.icon;
      break;
    default:
      icon = LessonTypeIcon.reading.icon;
      break;
  }

  return (
    <div className='w-full flex h-16'>
      <div className='w-10/12 flex'>
        <div className='w-1/12 bg-slate-50 rounded-xl mx-2 flex items-center justify-center'>
          <span className='iconify big-icon' data-icon={icon} />
        </div>
        <div className='w-11/12 bg-slate-50 rounded-xl font-medium text-xl mx-2 flex items-center'>
          <span className='mx-4'>{lesson.tituloLeccion}</span>
        </div>
      </div>
      <div className='w-2/12 flex items-center justify-center'>
        <button
          type='button'
          onClick={onEdit}
          title='Editar'
          className='focus:outline-none hover:scale-110 px-1'
        >
          <span className='iconify text-3xl' data-icon='eva:edit-outline' />
        </button>
        <button
          type='button'
          onClick={onDelete}
          tittle='Eliminar'
          className='focus:outline-none hover:scale-110 px-1'
        >
          <span className='iconify text-3xl' data-icon='bxs:trash' />
        </button>
      </div>
    </div>
  );
};

export default ItemAdminLesson;
