import React from 'react';

const About = () => (
  <div className='ml-40 pl-40 w-190'>
    <div className='flex w-full py-20 pr-20 pl-32 text-center text-2xl'>
      <p>
        MLearner es una versión inicial de una plataforma de enseñanza de
        conceptos y algoritmos de aprendizaje no supervisado, desarrollada para
        la materia Proyecto Integrador I y con la iniciativa del docente
        <b> Javier Fernando Botia Valderrama </b> quien además estuvo
        acompañando el proceso de desarrollo y creación de contenido.
      </p>
    </div>
    <div className='flex justify-center'>
      <h1 className='text-4xl font-bold text-dark_blue_1'>DESAROLLADORES</h1>
    </div>
    <div className='flex justify-center'>
      <CardDeveloper
        name='Paola Andrea Posada Restrepo'
        image='/picture-paola.png'
      />
      <CardDeveloper
        name='Juan Fernando Ríos Franco'
        image='/no-profile.jpeg'
      />
      <CardDeveloper
        name='Juan Esteban Gutiérrez Zuluaga'
        image='/picture-juanE.png'
      />
    </div>
    <div className='flex w-full py-20 pr-20 pl-32 text-center justify-center text-2xl'>
      <p>
        En este punto el aplicativo se encuentra abierto para futuras mejoras e
        implementación de nuevas funcionalidades.
      </p>
    </div>
  </div>
);

const CardDeveloper = ({ name, image }) => (
  <div className='flex flex-col justify-center items-center w-40 m-10'>
    <img src={image} alt='Developer' className='w-28 h-28 rounded-full' />
    <p className='text-center text-xl font-medium'>{name}</p>
  </div>
);

export default About;
