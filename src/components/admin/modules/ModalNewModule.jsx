import React, { useState } from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import { useDispatch } from 'react-redux';
import { saveModule } from 'actions/modules';
import { toast } from 'react-toastify';

const ModalNewModule = ({ showModal, setShowModal, tamanoNuevoModulo }) => {
  const { form, formData, updateFormData } = useFormData();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  function onClick() {
    setShowModal(false);
  }

  const onSubmit = async () => {
    console.log(formData);
    if (formData.nombre && formData.imagen && formData.carpetaDestinoRecurso) {
      const newModule = { ...formData, tamanoVisualizacion: tamanoNuevoModulo };
      console.log(newModule, 'a guardar');
      const module = await dispatch(saveModule(newModule));
      if (module) {
        toast.success('Módulo creado correctamente', {
          position: 'top-center',
        });
      }
      setShowModal(false);
    } else {
      setError('*Todos los campos son obligatorios');
    }
  };

  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <div className='text-3xl pr-16 w-full'>
          <span className='text-center '>Nuevo Módulo</span>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className='max-h-96 overflow-y-auto'>
          <form
            ref={form}
            onChange={updateFormData}
            className='w-full h-full flex flex-col justify-around items-left'
            onSubmit={onSubmit}
          >
            {error && <span className='text-red-600 italic'>{error}</span>}
            <InputLesson
              text='Nombre'
              name='nombre'
              type='text'
              required
              placeholder='Escribe el nombre del módulo'
            />
            <InputLesson
              text='Imagen'
              name='imagen'
              type='file'
              required
              accept='image/png'
              placeholder='Elige la imagen del módulo'
            />
            <span className='text-left text-dark_blue_2 italic pb-6'>
              {tamanoNuevoModulo === 'moduleLg'
                ? 'Por favor suba una imagen de 1012 x 289 para obtener una correcta visualizacion'
                : 'Por favor suba una imagen de 478 X 444 para obtener una correcta visualizacion'}
            </span>
            <InputLesson
              text='Carpeta destino'
              name='carpetaDestinoRecurso'
              required
              type='text'
              placeholder='Carpeta donde se almacenaran los recursos'
            />
            <span className='text-dark_blue_2 italic'>
              El nombre de la carpeta se debe llamar igual al módulo pero en
              inglés y usando - en lugar de espacios
            </span>
          </form>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='blueGray' onClick={() => onClick()} ripple='light'>
          Cancelar
        </Button>
        <Button color='blue' onClick={() => onSubmit()} ripple='light'>
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalNewModule;
