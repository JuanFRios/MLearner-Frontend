import { getModules } from 'actions/modules';
import ItemModule from 'components/admin/modules/ItemModule';
import ModalNewModule from 'components/admin/modules/ModalNewModule';
import LoadingHomeAdmin from 'components/loading/admin/LoadingHomeAdmin';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const ContentManagement = () => {
  function onEdit() {
    setShowNewModal(true);
  }
  const [showNewModal, setShowNewModal] = useState(false);
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);
  const [modulesItems, setModulesItems] = useState([]);
  const [tamanoNuevoModulo, setTamanoNuevoModulo] = useState('');
  let modules = null;
  console.log(ready, modules);

  useEffect(async () => {
    setTimeout(async () => {
      modules = await dispatch(getModules());
      setReady(true);
      calcularTamanoNuevoModulo(modules);
      setModulesItems(
        modules.map((m) => <ItemModule module={m} key={m.mid} />)
      );
    }, 500);
  }, []);

  const calcularTamanoNuevoModulo = (allModules) => {
    if (allModules.length > 1) {
      const ultimoModulo = allModules[allModules.length - 1];
      const penultimoModulo = allModules[allModules.length - 2];
      if (ultimoModulo.tamañoVisualizacion === 'moduleLg') {
        setTamanoNuevoModulo('moduleSm');
      } else if (penultimoModulo.tamañoVisualizacion === 'moduleSm') {
        setTamanoNuevoModulo('moduleLg');
      } else {
        setTamanoNuevoModulo('moduleSm');
      }
    } else if (allModules.length > 0) {
      setTamanoNuevoModulo('moduleSm');
    } else {
      setTamanoNuevoModulo('moduleLg');
    }
  };

  return (
    <>
      {!ready && <LoadingHomeAdmin />}
      {ready && (
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
            {modulesItems}
          </div>
          <ModalNewModule
            showModal={showNewModal}
            setShowModal={setShowNewModal}
            tamanoNuevoModulo={tamanoNuevoModulo}
          />
        </div>
      )}
    </>
  );
};

export default ContentManagement;
