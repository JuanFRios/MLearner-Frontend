import LessonContent from 'components/lesson/LessonContent';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLessonById } from 'actions/lessons';
import { useDispatch } from 'react-redux';

const LessonPreview = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [lesson, setLesson] = React.useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLessonById(id)).then((l) => {
      setLesson(l);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <div className='flex flex-col w-190 px-20'>Cargando...</div>;
  }

  return (
    <div className='flex flex-col w-190 px-20'>
      <LessonContent lesson={lesson} lostLives={0} />
    </div>
  );
};

export default LessonPreview;
