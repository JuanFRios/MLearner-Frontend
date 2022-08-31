import { getStatistics } from 'actions/statistics';
import TopStudents from 'components/statistics/TopStudents';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const AdminStatistics = () => {
  const [ready, setReady] = useState(false);
  const [topRacha, setTopRacha] = useState(null);
  const [topProgress, setTopProgress] = useState(null);
  const [topScore, setTopScore] = useState(null);
  const dispatch = useDispatch();
  useEffect(async () => {
    setTopRacha(await dispatch(getStatistics('RACHA')));
    setTopProgress(await dispatch(getStatistics('PUNTAJE')));
    setTopScore(await dispatch(getStatistics('PORCENTAJE')));
    setReady(true);
  }, []);
  if (!ready) {
    return (
      <div className='private-container'>
        <p>Cargando</p>
      </div>
    );
  }
  return (
    <div className='private-container'>
      <div>
        <p className='text-2xl font-bold'>Top 10 de estudiantes</p>
      </div>
      <div className='flex justify-center'>
        <TopStudents
          topRacha={topRacha}
          topProgress={topProgress}
          topScore={topScore}
        />
      </div>
    </div>
  );
};

export default AdminStatistics;
