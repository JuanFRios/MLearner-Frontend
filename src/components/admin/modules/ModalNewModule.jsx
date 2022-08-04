import React from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';

const ModalNewModule = ({ showModal, setShowModal, tamanoNuevoModulo }) => {
  const { form, formData, updateFormData } = useFormData();
  function onClick() {
    setShowModal(false);
    console.log(formData);
  }

  const onSubmit = () => {
    console.log(formData);
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
            className='w-full h-full flex flex-col justify-around items-center'
            onSubmit={onSubmit}
          >
            <InputLesson
              text='Nombre'
              name='nombre'
              type='text'
              placeholder='Escribe el nombre del módulo'
            />
            <InputLesson
              text='Imagen'
              name='imagen'
              type='file'
              placeholder='Elige la imagen del módulo'
            />
            <span>
              {tamanoNuevoModulo === 'moduleLg'
                ? 'Por favor suba una imagen de 206 x 205 para obtener una correcta visualizacion'
                : 'Por favor suba una imagen de 46 x 45 para obtener una correcta visualizacion'}
            </span>
            <InputLesson
              text='Carpeta destino'
              name='nombre'
              type='text'
              placeholder='Carpeta donde se almacenaran los recursos'
            />
            <span>
              El nombre de la carpeta se debe llamar igual al modulo pero en
              ingles y usando - en lugar de espacios
            </span>
          </form>
          <p>{tamanoNuevoModulo}</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='blueGray' onClick={() => onClick()} ripple='light'>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalNewModule;
