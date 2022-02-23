import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';

export const ResultDialog = ({ showModal, onNoClick, text, textButton }) => (
  <Modal
    size='lg'
    active={showModal}
    toggler={() => onNoClick()}
    className='z-50'
  >
    <ModalHeader toggler={() => onNoClick()}>
      <span className='text-3xl'>Resultado</span>
    </ModalHeader>
    <ModalBody>{text}</ModalBody>
    <ModalFooter>
      <Button
        color='green'
        buttonType='link'
        onClick={() => onNoClick()}
        ripple='dark'
      >
        {textButton}
      </Button>
    </ModalFooter>
  </Modal>
);
