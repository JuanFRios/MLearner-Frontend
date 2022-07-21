/* eslint-disable import/no-import-module-exports */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemModule = ({ module }) => {
  const navigate = useNavigate();
  let anchoModulo;
  let medidatexto;
  // let medidaIcono;
  console.log('first');

  function onEdit() {
    console.log('first');
  }
  function onDelete() {
    console.log('first');
  }
  function onConfig() {
    navigate('/admin/course/module/1234231');
    console.log('first');
  }

  if (module.tamaño === 'moduleLg') {
    anchoModulo = 'w-full';
    medidatexto = 'w-128 mt-12 text-2xl';
    // medidaIcono = 'pl-64';
  } else {
    anchoModulo = 'w-96 m-4';
    medidatexto = 'w-full mt-12 text-lg';
    // medidaIcono = 'pl-12';
  }

  return (
    <div className={anchoModulo}>
      <div className='flex flex-col items-center my-2 text-white w-full'>
        <div
          className={`${module.tamaño}  enable flex py-4`}
          style={{
            backgroundImage: `url(${module.urlImage})`,
            objectFit: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex flex-col w-full'>
            <div className='flex justify-end'>
              <div className='module-actions text-xl font-bold px-2 pt-2'>
                <button
                  type='button'
                  onClick={onConfig}
                  title='configurar módulo'
                  className='focus:outline-none hover:scale-110 px-1'
                >
                  <span
                    className='iconify text-3xl'
                    data-icon='ci:settings-filled'
                  />
                </button>
                <button
                  type='button'
                  onClick={onEdit}
                  title='Editar'
                  className='focus:outline-none hover:scale-110 px-1'
                >
                  <span
                    className='iconify text-3xl'
                    data-icon='eva:edit-outline'
                  />
                </button>
                <button
                  type='button'
                  onClick={onDelete}
                  tittle='Eliminar'
                  className='focus:outline-none hover:scale-110 px-1'
                >
                  <span className='iconify text-3xl' data-icon='bxs:trash' />
                </button>
              </div>
            </div>
            <div
              className={`${medidatexto} flex flex-col justify-center text-center`}
            >
              <p className='font-bold px-8 w-full pt-1'>{module.nombre}</p>
              <p className='font-thin px-8 w-full pb-1'>
                {module.nroLecciones} lecciones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModule;
