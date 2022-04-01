import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';

export const ResultDialog = ({
  showModal,
  onNoClick,
  titulo,
  icon,
  text,
  textButton,
}) => (
  <div className='front'>
    <Modal
      size='xl'
      active={showModal}
      toggler={() => onNoClick()}
      className='front'
    >
      <ModalHeader toggler={() => onNoClick()}>
        <span className='text-3xl flex'>{titulo}</span>
      </ModalHeader>
      <ModalBody>
        <span className='flex'>
          <span className='iconify text-3xl' data-icon={icon} />
          {text}
          <span className='iconify text-3xl' data-icon={icon} />
        </span>
      </ModalBody>
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
  </div>
);
