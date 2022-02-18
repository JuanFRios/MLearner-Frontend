import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import { useDispatch } from 'react-redux';
import { removeActiveLessons, resetLessonStatus } from 'actions/lessons';
import { useNavigate } from 'react-router-dom';

export const ConfirmDialog = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onClick() {
    setShowModal(false);
    dispatch(removeActiveLessons());
    dispatch(resetLessonStatus());
    navigate('/home');
  }

  return (
    <Modal size='lg' active={showModal} toggler={() => setShowModal()}>
      <ModalHeader toggler={() => setShowModal(false)}>
        <span className='text-3xl'>Confirmar salida</span>
      </ModalHeader>
      <ModalBody>¿Está seguro que desea abandonar la lección?</ModalBody>
      <ModalFooter>
        <Button
          color='red'
          buttonType='link'
          onClick={() => setShowModal(false)}
          ripple='dark'
        >
          Cancelar
        </Button>

        <Button color='green' onClick={() => onClick()} ripple='light'>
          Confirmar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
