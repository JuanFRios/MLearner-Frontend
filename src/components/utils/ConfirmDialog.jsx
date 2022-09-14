import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';

export const ConfirmDialog = ({
  showModal,
  setShowModal,
  onConfirm,
  title,
  text,
}) => (
  <div className='front'>
    <Modal
      size='lg'
      className='front'
      active={showModal}
      toggler={() => setShowModal()}
    >
      <ModalHeader toggler={() => setShowModal(false)}>
        <span className='text-3xl'>{title}</span>
      </ModalHeader>
      <ModalBody>{text}</ModalBody>
      <ModalFooter>
        <Button
          color='red'
          buttonType='link'
          onClick={() => setShowModal(false)}
          ripple='dark'
        >
          Cancelar
        </Button>

        <Button color='green' onClick={() => onConfirm()} ripple='light'>
          Confirmar
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);
