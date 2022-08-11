import React from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import { useDispatch } from 'react-redux';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import { saveResourceModule } from 'actions/modules';
import { toast } from 'react-toastify';

const NewResourceModal = ({ showModal, setShowModal, module }) => {
  const { form, formData, updateFormData } = useFormData();
  const dispatch = useDispatch();
  function onClick() {
    setShowModal(false);
  }

  const onSubmit = async () => {
    if (formData.resource) {
      const resource = await dispatch(saveResourceModule(module, formData));
      console.log(resource);
      if (resource) {
        navigator.clipboard.writeText(resource.data.recurso.url);
        toast.success('Recurso creado, url copiada en el portapapeles', {
          position: 'top-center',
        });
      }
      setShowModal(false);
    }

    // resetFormData();
  };

  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <span className='text-3xl'>Nuevo Recurso </span>
      </ModalHeader>
      <ModalBody>
        <div className='flex'>
          <form
            ref={form}
            onChange={updateFormData}
            className='w-full h-full mb-6 flex justify-center items-center'
            onSubmit={onSubmit}
          >
            <InputLesson
              text='Nuevo recurso'
              name='resource'
              type='file'
              accept=''
              required
              placeholder='Nuevo recurso'
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

export default NewResourceModal;
