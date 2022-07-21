import React from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';

const ResourcesModal = ({ showModal, setShowModal }) => {
  function onClick() {
    setShowModal(false);
  }
  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <span className='text-3xl'>Recursos del módulo </span>
      </ModalHeader>
      <ModalBody>
        <div className='max-h-96 overflow-y-auto'>
          <p>Inputs</p>
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

export default ResourcesModal;
