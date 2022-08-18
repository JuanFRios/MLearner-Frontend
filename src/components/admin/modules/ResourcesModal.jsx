import React, { useEffect, useState } from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import { useDispatch } from 'react-redux';
import { getresourcesByModule } from 'actions/modules';
import TableBasic, { createRow } from 'components/utils/Table';

const ResourcesModal = ({ showModal, setShowModal, module }) => {
  const [resources, setResources] = useState(null);
  const [ready, setReady] = useState(null);
  const dispatch = useDispatch();
  function onClick() {
    setShowModal(false);
  }
  useEffect(async () => {
    const resp = await dispatch(getresourcesByModule(module));
    const data = {
      labels: ['Nombre', 'Url'],
      rows: resp.map((r) => createRow([r.nombre, r.url], r.rid)),
    };
    setResources(data);
    setReady(true);
    console.log(resources);
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
        <span className='text-3xl'>Recursos del módulo </span>
      </ModalHeader>
      <ModalBody>
        <div className='max-h-96 overflow-y-auto'>
          <TableBasic data={resources} />
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

export default ResourcesModal;
