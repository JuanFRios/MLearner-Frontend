import InformationProgress from 'components/InformationProgress';
import React from 'react';

const Dashboard = () => (
  <div className='ml-64 pl-32 pt-5'>
    <div className='flex float-right mr-6'>
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
  </div>
);

export default Dashboard;
