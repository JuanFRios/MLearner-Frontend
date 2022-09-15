/* eslint-disable react/jsx-no-bind */
import { deleteLesson } from 'actions/lessons';
import { ConfirmDialog } from 'components/utils/ConfirmDialog';
import { LessonTypeIcon } from 'constants/Lesson';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemAdminLesson = ({ lesson }) => {
  const { module } = useParams();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let route;
  function onEdit() {
    navigate(route);
  }
  const onDelete = async () => {
    const resp = await dispatch(deleteLesson(lesson.lid));
    if (resp) {
      window.location.reload(true);
      toast.success('Lección eliminada correctamente', {
        position: 'top-center',
      });
    }
    navigate(`/admin/course/module/${module}`);
    setShowConfirmDialog(false);
  };

  function onPreview() {
    navigate(`/preview/lesson/${lesson.lid}`);
  }

  const handleConfirmDialog = () => {
    setShowConfirmDialog(true);
  };

  let icon;
  switch (lesson.tipo) {
    case LessonTypeIcon.reading.type:
      icon = LessonTypeIcon.reading.icon;
      route = `/admin/course/module/${module}/reading/${lesson.lid}`;
      break;
    case LessonTypeIcon.code.type:
      icon = LessonTypeIcon.code.icon;
      route = `/admin/course/module/${module}/code/${lesson.lid}`;
      break;
    case LessonTypeIcon.quiz.type:
      icon = LessonTypeIcon.quiz.icon;
      route = `/admin/course/module/${module}/quiz/${lesson.lid}`;
      break;
    default:
      icon = LessonTypeIcon.reading.icon;
      break;
  }

  return (
    <div className='w-full flex h-16 my-2'>
      <div className='w-10/12 flex'>
        <div className='w-1/12 bg-slate-50 rounded-xl mx-2 flex items-center justify-center'>
          <span className='iconify big-icon' data-icon={icon} />
        </div>
        <div className='w-11/12 bg-slate-50 rounded-xl font-medium text-xl mx-2 flex items-center'>
          <span className='mx-4'>{lesson.titulo}</span>
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
          onClick={onPreview}
          tittle='Visualizar'
          className='focus:outline-none hover:scale-110 px-1'
        >
          <span className='iconify text-3xl' data-icon='akar-icons:eye' />
        </button>
        <button
          type='button'
          onClick={handleConfirmDialog}
          tittle='Eliminar'
          className='focus:outline-none hover:scale-110 px-1'
        >
          <span className='iconify text-3xl' data-icon='bxs:trash' />
        </button>
      </div>
      <ConfirmDialog
        showModal={showConfirmDialog}
        setShowModal={setShowConfirmDialog}
        title='Confirmar borrado'
        text='¿Está seguro que desea eliminar la lección?'
        onConfirm={onDelete}
      />
    </div>
  );
};

export default ItemAdminLesson;
