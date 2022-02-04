import { Content } from 'components/Content';
import { ContinueLesson } from 'components/ContinueLesson';
import InformationProgress from 'components/InformationProgress';
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='ml-64 pl-28 pr-4 pt-5'>
      <div className='flex flex-col'>
        <div className='flex justify-end mr-6'>
          <InformationProgress
            className='basis-1/4'
            icono='grommet-icons:diamond'
            color='text-sky-400'
            titulo='Puntaje'
            informacion={user.puntajeGlobal}
          />
          <InformationProgress
            className='basis-1/4'
            icono='ic:sharp-local-fire-department'
            color='text-orange-600'
            titulo='Racha'
            informacion={user.rachaDias}
          />
          <InformationProgress
            className='basis-1/4'
            icono='mdi:progress-clock'
            color='text-green-600'
            titulo='Progreso'
            informacion={`${user.porcentajeProgreso}%`}
          />
        </div>
        <div>
          <p className='text-2xl font-bold'>
            Hola {user.nombreCompleto.split(' ')[0]}!, sigue aprendiendo
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
        <Content
          nombre='Introducción a Python'
          puntajeObtenido='32'
          puntajetotal='32'
          tamaño='moduleLg'
          activo='True'
        />
        <Content
          nombre='Ingeniería de Características'
          puntajeObtenido='0'
          puntajetotal='32'
          tamaño='moduleSm'
          activo='False'
        />
        <Content
          nombre='Reducción de dimensionalidad'
          puntajeObtenido='0'
          puntajetotal='32'
          tamaño='moduleSm'
          activo='False'
        />
        <Content
          nombre='Clustering'
          puntajeObtenido='0'
          puntajetotal='32'
          tamaño='moduleLg'
          activo='False'
        />
      </div>
    </div>
  );
};

export default Dashboard;
