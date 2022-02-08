/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { Content } from 'components/Content';
import { ContinueLesson } from 'components/ContinueLesson';
import InformationProgress from 'components/InformationProgress';
import { useSelector, useDispatch } from 'react-redux';
import { getContentModule } from 'actions/modules';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let modules = null;
  const [modulesItems, setModulesItems] = useState([]);
  const tamañitorandom = ['moduleLg', 'moduleSm'];

  useEffect(async () => {
    modules = await dispatch(getContentModule());
    setModulesItems(
      modules.data.contenidoCurso.map((module) => (
        <Content
          key={module.modulo._id}
          nombre={module.modulo.nombre}
          idModule={module.modulo._id}
          puntajeObtenido={module.puntajeAcumulado}
          puntajetotal={module.modulo.puntajeMaximo}
          tamaño={
            tamañitorandom[Math.floor(Math.random() * tamañitorandom.length)]
          }
          activo={module.estado === 'EN_CURSO'}
        />
      ))
    );
    console.log(modulesItems);
  }, []);

  return (
    <div className='ml-64 pl-28 pr-4 pt-5'>
      <div className='flex flex-col'>
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
            informacion={user ? `${user.porcentajeProgreso}%` : ''}
          />
        </div>
        <div>
          <p className='text-2xl font-bold'>
            Hola {user ? user.nombreCompleto.split(' ')[0] : ''}!, sigue
            aprendiendo
          </p>
        </div>
        <ContinueLesson
          leccion='Lección: Procesamiento con pandas'
          modulo='Modulo: Ingeniería de características'
        />
      </div>
      <div className='my-6 pt-3 text-2xl font-bold'>
        <p>Contenido del curso</p>
      </div>
      <div className='items-center px-24 w-160 flex flex-wrap justify-between my-4'>
        {modulesItems}
      </div>
    </div>
  );
};

export default Dashboard;
