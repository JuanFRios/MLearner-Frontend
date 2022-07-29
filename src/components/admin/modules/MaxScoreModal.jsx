import React, { useEffect, useState } from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import { useDispatch } from 'react-redux';
import { getScoreModule } from 'actions/modules';
import TableBasic, { createRow } from 'components/utils/Table';

const MaxScoreModal = ({ showModal, setShowModal, module }) => {
  const dispatch = useDispatch();
  const [score, setScore] = useState(null);
  const [ready, setReady] = useState(null);
  function onClick() {
    setShowModal(false);
  }

  useEffect(async () => {
    const resp = await dispatch(getScoreModule(module));
    const data = {
      labels: ['Tipo de lección', 'Puntaje'],
      rows: [
        createRow(['Lectura', resp.puntajeLeccionesLectura]),
        createRow(['Quiz', resp.puntajeLeccionesQuiz]),
        createRow(['Código', resp.puntajeLeccionesCodigo]),
        createRow(['Total puntos', resp.puntajeTotal]),
      ],
    };
    setScore(data);

    setReady(true);
    console.log(score);
  }, [showModal]);

  if (!ready) {
    return (
      <div>
        <p>Cargando</p>
      </div>
    );
  }

  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <div className='text-3xl pr-16 w-full'>
          <span className='text-center '>Puntaje máximo del módulo </span>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className='max-h-96 overflow-y-auto'>
          <TableBasic data={score} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='blueGray' onClick={() => onClick()} ripple='light'>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default MaxScoreModal;
