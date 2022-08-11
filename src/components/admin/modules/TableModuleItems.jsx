import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { useDispatch } from 'react-redux';
import ItemAdminLesson from 'components/admin/modules/ItemAdminLesson';
import { getLessonsByModule } from 'actions/modules';

export default function TableModuleItems({ module }) {
  const [page, setPage] = React.useState(0);
  const [countItems, setCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [lessonsItem, setLessonsItems] = React.useState(null);
  const [ready, setReady] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    const lessons = await dispatch(
      getLessonsByModule(module, page, rowsPerPage)
    );
    setLessonsItems(
      lessons.lecciones.map((l) => <ItemAdminLesson lesson={l} key={l.lid} />)
    );
    setCount(lessons.totalElements);
    setReady(true);
    console.log(lessons);
  }, [page, rowsPerPage]);

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
  );
}
