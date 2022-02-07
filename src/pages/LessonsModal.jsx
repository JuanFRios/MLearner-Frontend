import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
// import LoadingLessons from 'components/loading/LoadingLessons';
import ItemLesson from 'components/dashboard/ItemLesson';
import { useDispatch, useSelector } from 'react-redux';
import LoadingLessons from 'components/loading/LoadingLessons';
import { removeActiveLessons } from 'actions/lessons';

export const LessonsModal = ({ module, showModal, setShowModal }) => {
  const { activeLessons } = useSelector((state) => state.lessons);
  const dispatch = useDispatch();
  function onClick() {
    setShowModal(false);
    dispatch(removeActiveLessons());
  }
  const listItems = activeLessons
    ? activeLessons.map((lesson) => (
        <ItemLesson
          key={lesson.idLeccion}
          type={lesson.tipo}
          status={lesson.estado}
          title={lesson.tituloLeccion}
        />
      ))
    : null;

  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <span className='text-3xl'>Módulo: {module}</span>
      </ModalHeader>
      <ModalBody>
        <div className='max-h-96 overflow-y-auto'>
          {activeLessons ? <ul>{listItems}</ul> : <LoadingLessons />}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='blueGray' onClick={() => onClick()} ripple='light'>
          Salir
        </Button>
      </ModalFooter>
    </Modal>
  );
};
