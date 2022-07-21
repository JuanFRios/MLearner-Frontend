import { Menu, MenuItem } from '@mui/material';
import ItemAdminLesson from 'components/admin/modules/ItemAdminLesson';
import MaxScoreModal from 'components/admin/modules/MaxScoreModal';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModuleContent = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showMenuLesson, setshowMenuLesson] = useState(false);
  const navigate = useNavigate();
  function addLesson() {
    setshowMenuLesson((anchorEld) => !anchorEld);
    console.log('first');
  }

  const handleClose = () => {
    setshowMenuLesson(false);
  };

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
      <div className='flex w-full justify-end mx-4'>
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
          id='basic-button'
          aria-controls={showMenuLesson ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={showMenuLesson ? 'true' : undefined}
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={addLesson}
        >
          <span className='iconify text-2xl mx-1' data-icon='carbon:add-alt' />
          Agregar lección
        </button>
        <Menu
          id='basic-menu'
          anchorEl={showMenuLesson}
          open={showMenuLesson}
          onClose={handleClose}
          aria-labelledby='basic-button'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <p>Hola</p>
      <ItemAdminLesson lesson={lesson} />
      <MaxScoreModal
        showModal={showScoreModal}
        setShowModal={setShowScoreModal}
      />
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
      />
    </div>
  );
};

export default ModuleContent;
