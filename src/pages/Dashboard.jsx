import { ContinueLesson } from 'components/ContinueLesson';
import InformationProgress from 'components/InformationProgress';
import React from 'react';

const Dashboard = () => (
  <div className='flex flex-col ml-64 pl-28 pr-4 pt-5'>
    <div className='flex justify-end mr-6'>
      <InformationProgress
        className='basis-1/4'
        icono='grommet-icons:diamond'
        color='text-sky-400'
        titulo='Puntaje'
        informacion='10/30'
      />
      <InformationProgress
        className='basis-1/4'
        icono='ic:sharp-local-fire-department'
        color='text-orange-600'
        titulo='Racha'
        informacion='7'
      />
      <InformationProgress
        className='basis-1/4'
        icono='mdi:progress-clock'
        color='text-green-600'
        titulo='Progreso'
        informacion='10%'
      />
    </div>
    <div>
      <p className='text-2xl font-bold'>Hola Felipe!, sigue aprendiendo</p>
    </div>
    <div>
      <ContinueLesson />
    </div>
  </div>
);

export default Dashboard;
