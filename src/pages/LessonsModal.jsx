import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import { useState } from 'react';
import ItemLesson from 'components/dashboard/ItemLesson';

export default function LessonsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        color='lightBlue'
        type='button'
        onClick={() => setShowModal(true)}
        ripple='light'
        className='ml-96'
      >
        Open small Modal
      </Button>

      <Modal size='lg' active={showModal} toggler={() => setShowModal(false)}>
        <ModalHeader toggler={() => setShowModal(false)}>
          <span className='text-3xl'>
            Módulo: Ingeniería de características
          </span>
        </ModalHeader>
        <ModalBody>
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
          <ItemLesson />
        </ModalBody>
        <ModalFooter>
          <Button
            color='blueGray'
            onClick={() => setShowModal(false)}
            ripple='light'
          >
            Salir
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
