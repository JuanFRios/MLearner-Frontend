import { getRacha, getStatistics } from 'actions/statistics';
import InformationProgress from 'components/InformationProgress';
import RachaReport from 'components/statistics/RachaReport';
import TopStudents from 'components/statistics/TopStudents';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { average } from 'utils/math';

const Statistics = () => {
  const [ready, setReady] = useState(false);
  const [topRacha, setTopRacha] = useState(null);
  const [topProgress, setTopProgress] = useState(null);
  const [topScore, setTopScore] = useState(null);
  const [racha, setRacha] = useState([]);
  const [avg, setavg] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(async () => {
    const ra = await dispatch(getRacha());
    setRacha(ra);
    setTopRacha(await dispatch(getStatistics('RACHA')));
    setTopScore(await dispatch(getStatistics('PUNTAJE')));
    setTopProgress(await dispatch(getStatistics('PORCENTAJE')));
    setTimeout(() => {
      const scores = racha.map((r) => r.puntajeAcumulado);
      setavg(average(scores));
      setReady(true);
    }, 500);
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
            <p className='text-2xl font-bold mt-4'>
              {user?.nombreCompleto.split(' ')[0]}!, observa tu progreso, has
              obtenido en promedio {avg} puntos cada día durante la última
              semana
            </p>
          </div>
          <div className='flex justify-center'>
            <RachaReport days={racha} />
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
