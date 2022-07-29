import ItemAdminLesson from 'components/admin/modules/ItemAdminLesson';
import MaxScoreModal from 'components/admin/modules/MaxScoreModal';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import ButtonPopper from 'components/utils/ButtonPopper';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ModuleContent = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const navigate = useNavigate();
  const { module } = useParams();

  function onMaxScore() {
    setShowScoreModal(true);
  }
  function onResources() {
    setShowResourcesModal(true);
  }
  function onBack() {
    navigate('/admin/course');
  }

  const lesson = {
    idLeccion: '625d812c7ab0a5763aac964c',
    tituloLeccion: '1. ¡Hola mundo!',
    orden: 0,
    tipo: 'LECTURA',
    estado: 'VISTA',
  };
  const lesson2 = {
    idLeccion: '625d812c7ab0a5763aac964c',
    tituloLeccion: '2. Mi primer código',
    orden: 0,
    tipo: 'CODIGO',
    estado: 'VISTA',
  };
  const lesson3 = {
    idLeccion: '625d812c7ab0a5763aac964c',
    tituloLeccion: '3. Pon a prueba tus conocimientos',
    orden: 0,
    tipo: 'QUIZ',
    estado: 'VISTA',
  };
  return (
    <div className='private-container'>
      <div className='mb-4'>
        <button
          type='button'
          onClick={onBack}
          className='focus:outline-none hover:scale-110'
        >
          <span className='iconify big-icon' data-icon='bx:arrow-back' />
        </button>
      </div>
      <p className='text-2xl font-thin'>Contenido del módulo</p>
      <p className='text-2xl font-bold'>Reducción de dimensionalidad</p>
      <div className='flex w-full justify-end mx-4 pr-16'>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onMaxScore}
        >
          <span> Puntaje máximo</span>
        </button>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onResources}
        >
          <span> Recursos</span>
        </button>
        <ButtonPopper module={module} />
      </div>
      <ItemAdminLesson lesson={lesson} />
      <ItemAdminLesson lesson={lesson2} />
      <ItemAdminLesson lesson={lesson3} />
      <MaxScoreModal
        showModal={showScoreModal}
        setShowModal={setShowScoreModal}
        module={module}
      />
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
        module={module}
      />
    </div>
  );
};

export default ModuleContent;
