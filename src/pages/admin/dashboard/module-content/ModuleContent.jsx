import { TablePagination } from '@mui/material';
import { getLessonsByModule } from 'actions/modules';
import ItemAdminLesson from 'pages/admin/dashboard/module-content/ItemAdminLesson';
import MaxScoreModal from 'pages/admin/dashboard/module-content/MaxScoreModal';
import NewResourceModal from 'pages/admin/dashboard/module-content/NewResourceModal';
import ResourcesModal from 'pages/admin/dashboard/module-content/ResourcesModal';
import ButtonPopper from 'components/utils/ButtonPopper';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ModuleContent = () => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showNewResourceModal, setShowNewResourceModal] = useState(false);

  const [page, setPage] = React.useState(0);
  const [countItems, setCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [lessonsItem, setLessonsItems] = React.useState(null);
  const [ready, setReady] = React.useState(null);
  const [moduleName, setModuleName] = React.useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { module } = useParams();

  React.useEffect(async () => {
    const lessons = await dispatch(
      getLessonsByModule(module, page, rowsPerPage)
    );
    setLessonsItems(
      lessons.lecciones.map((l) => <ItemAdminLesson lesson={l} key={l.lid} />)
    );
    setModuleName(lessons.nombreModulo);
    setCount(lessons.totalElements);
    setReady(true);
  }, [page, rowsPerPage]);

  function onMaxScore() {
    setShowScoreModal(true);
  }
  function onResources() {
    setShowResourcesModal(true);
  }
  function onNewResource() {
    setShowNewResourceModal(true);
  }
  function onBack() {
    navigate('/admin/course');
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!ready) {
    return (
      <div className='private-container'>
        <h1>Cargando ... </h1>
      </div>
    );
  }

  return (
    <div className='private-container'>
      <div className='mb-4'>
        <button
          type='button'
          onClick={onBack}
          className='focus:outline-none hover:scale-110'
        >
          <span className='iconify big-icon' data-icon='bx:arrow-back' />
        </button>
      </div>
      <p className='text-2xl font-thin'>Contenido del módulo</p>
      <p className='text-2xl font-bold'>{moduleName}</p>
      <div className='flex w-full justify-end mx-4 pr-16'>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onMaxScore}
        >
          <span> Puntaje máximo</span>
        </button>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onResources}
        >
          <span> Recursos</span>
        </button>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onNewResource}
        >
          <span> Nuevo recurso</span>
        </button>
        <ButtonPopper module={module} />
      </div>
      <div>
        <TablePagination
          component='div'
          count={countItems}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage='Filas por página:'
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} de ${count}`
          }
          className='mr-16'
        />
        {lessonsItem}
      </div>
      <MaxScoreModal
        showModal={showScoreModal}
        setShowModal={setShowScoreModal}
        module={module}
      />
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
        module={module}
      />
      <NewResourceModal
        showModal={showNewResourceModal}
        setShowModal={setShowNewResourceModal}
        module={module}
      />
    </div>
  );
};

export default ModuleContent;
