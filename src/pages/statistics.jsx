import { getRacha, getStatistics } from 'actions/statistics';
import InformationProgress from 'components/InformationProgress';
import RachaReport from 'components/statistics/RachaReport';
import TopStudents from 'components/statistics/TopStudents';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Statistics = () => {
  const [ready, setReady] = useState(false);
  const [topRacha, setTopRacha] = useState(null);
  const [topProgress, setTopProgress] = useState(null);
  const [topScore, setTopScore] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(getRacha());
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
    <>
      {!ready && (
        <div className='private-container'>
          <p>Cargando</p>
        </div>
      )}
      {ready && (
        <div className='private-container'>
          <div className='flex justify-end mr-6'>
            <InformationProgress
              className='basis-1/4'
              icono='grommet-icons:diamond'
              color='text-sky-400'
              titulo='Puntaje'
              informacion={user ? user.puntajeGlobal : ''}
            />
            <InformationProgress
              className='basis-1/4'
              icono='ic:sharp-local-fire-department'
              color='text-orange-600'
              titulo='Racha'
              informacion={user ? user.rachaDias : ''}
            />
            <InformationProgress
              className='basis-1/4'
              icono='mdi:progress-clock'
              color='text-green-600'
              titulo='Progreso'
              informacion={user ? `${user.porcentajeProgreso.toFixed(1)}%` : ''}
            />
          </div>
          <div>
            <p className='text-2xl font-bold'>
              {user?.nombreCompleto.split(' ')[0]}!, observa tu progreso
            </p>
          </div>
          <div className='flex justify-center'>
            <RachaReport />
          </div>
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
      )}
    </>
  );
};

export default Statistics;
