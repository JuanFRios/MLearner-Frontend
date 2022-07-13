import { getStatistics } from 'actions/statistics';
import TopStudents from 'components/statistics/TopStudents';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Statistics = () => {
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
    return <p>cargando</p>;
  }
  return (
    <>
      {!ready && <p>cargando</p>}
      {ready && (
        <div className='ml-40 pl-40 w-190'>
          <TopStudents
            topRacha={topRacha}
            topProgress={topProgress}
            topScore={topScore}
          />
        </div>
      )}
    </>
  );
};

export default Statistics;
