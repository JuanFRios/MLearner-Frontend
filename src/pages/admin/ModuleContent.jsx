import MaxScoreModal from 'components/admin/modules/MaxScoreModal';
import NewResourceModal from 'components/admin/modules/NewResourceModal';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import TableModuleItems from 'components/admin/modules/TableModuleItems';
import ButtonPopper from 'components/utils/ButtonPopper';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ModuleContent = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showNewResourceModal, setShowNewResourceModal] = useState(false);

  const navigate = useNavigate();
  const { module } = useParams();

  function onMaxScore() {
    setShowScoreModal(true);
  }
  function onResources() {
    setShowResourcesModal(true);
  }
  function onNewResource() {
    setShowNewResourceModal(true);
  }
  function onBack() {
    navigate('/admin/course');
  }

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
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onNewResource}
        >
          <span> Nuevo recurso</span>
        </button>
        <ButtonPopper module={module} />
      </div>
      <TableModuleItems module={module} />
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
      <NewResourceModal
        showModal={showNewResourceModal}
        setShowModal={setShowNewResourceModal}
        module={module}
      />
    </div>
  );
};

export default ModuleContent;
