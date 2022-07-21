import ItemModule from 'components/admin/modules/ItemModule';
import ModalNewModule from 'components/admin/modules/ModalNewModule';
import React, { useState } from 'react';

const ContentManagement = () => {
  function onEdit() {
    setShowNewModal(true);
  }

  const [showNewModal, setShowNewModal] = useState(false);
  console.log('first');
  const module = {
    nombre: 'Introducción a Python',
    id: 'prueba',
    tamaño: 'moduleLg',
    orden: 0,
    nroLecciones: 54,
    urlImage:
      'https://res.cloudinary.com/proyecto-integrador-udea-2022/image/upload/v1643821946/img1_1_lkjhw9.png',
  };
  const module1 = {
    nombre: 'Ingeniería de Características',
    id: 'prueba',
    tamaño: 'moduleSm',
    orden: 0,
    nroLecciones: 54,
    urlImage:
      'https://res.cloudinary.com/proyecto-integrador-udea-2022/image/upload/v1646320991/Ing_caract_1_e5ibej.png',
  };
  const module2 = {
    nombre: 'Reducción de dimensionalidad',
    id: 'prueba',
    tamaño: 'moduleSm',
    orden: 0,
    nroLecciones: 54,
    urlImage:
      'https://res.cloudinary.com/proyecto-integrador-udea-2022/image/upload/v1646322777/Reduccion_lclc2l.png',
  };
  const module3 = {
    nombre: 'Clustering',
    id: 'prueba',
    tamaño: 'moduleLg',
    orden: 0,
    nroLecciones: 54,
    urlImage:
      'https://res.cloudinary.com/proyecto-integrador-udea-2022/image/upload/v1646323976/Clustering_1_lvdnbk.png',
  };
  return (
    <div className='private-container'>
      <p className='text-2xl font-bold'>Contenido del curso</p>

      <div className='items-center px-24 w-160 flex flex-wrap justify-between my-4'>
        <div className='flex w-full justify-end mx-4'>
          <button
            type='button'
            className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center'
            onClick={onEdit}
          >
            <span
              className='iconify text-2xl mx-1'
              data-icon='carbon:add-alt'
            />
            Agregar módulo
          </button>
        </div>
        <ItemModule module={module} />
        <ItemModule module={module1} />
        <ItemModule module={module2} />
        <ItemModule module={module3} />
      </div>
      <ModalNewModule showModal={showNewModal} setShowModal={setShowNewModal} />
    </div>
  );
};

export default ContentManagement;
