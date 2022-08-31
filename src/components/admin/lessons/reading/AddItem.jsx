import useFormData from 'hooks/useFormData';
import React from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import InputLesson from 'components/utils/InputLesson';
import Select from 'components/utils/Select';
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({ showModal, setShowModal, contenido, setContenido }) => {
  const { form, formData, updateFormData } = useFormData();
  function onClick() {
    setShowModal(false);
    document.getElementById('formreadinglesson').reset();
  }

  const onSubmit = async () => {
    setContenido([...contenido, { ...formData, _id: uuidv4() }]);
    setShowModal(false);
    document.getElementById('formreadinglesson').reset();
  };

  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <span className='text-3xl mr-52'>Nuevo item</span>
      </ModalHeader>
      <ModalBody>
        <div className='flex'>
          <form
            id='formreadinglesson'
            ref={form}
            onChange={updateFormData}
            className='w-full h-full mb-6 flex flex-col justify-center items-center'
            onSubmit={onSubmit}
          >
            <Select
              text='Tipo de item'
              name='clave'
              type='checkbox'
              required
              options={[
                { value: null, label: '-' },
                { value: 'TITULO', label: 'Titulo' },
                { value: 'SUBTITULO', label: 'Subtitulo' },
                { value: 'TEXTO', label: 'Texto' },
                { value: 'IMAGEN', label: 'Imagen' },
                { value: 'LISTA', label: 'Lista' },
                { value: 'LINK', label: 'Link' },
                { value: 'TEXTO-CODIGO', label: 'Texto en formato código' },
              ]}
              placeholder='Ingrese una descripción'
            />
            <InputLesson
              text='Valor del item'
              name='valor'
              type='text'
              accept=''
              required
              placeholder='Ingrese un valor'
              textarea
            />
          </form>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='blueGray' onClick={() => onClick()} ripple='light'>
          Cerrar
        </Button>
        <Button color='blue' ripple='light' onClick={onSubmit}>
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddItem;
