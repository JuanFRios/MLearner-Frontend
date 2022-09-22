import React, { useEffect, useState } from 'react';
import { Icon } from '@mui/material';
import { ConfirmDialog } from 'components/utils/ConfirmDialog';

const ItemOption = ({ option, setItemEdit, setShowEditItem, handleDelete }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState('');
  function onEdit() {
    setShowEditItem(true);
    setItemEdit(option);
  }
  function onDelete() {
    setShowConfirmDialog(true);
  }

  const handleConfirmDelete = () => {
    handleDelete(option._id);
  };
  useEffect(() => {
    if (option.esCorrecta) {
      setIcon('check_circle');
      setColor('bg-green-100');
    } else {
      setIcon('cancel');
      setColor('bg-red-100');
    }
  }, [option]);

  return (
    <div className='w-full flex h-16 my-2'>
      <div className='w-10/12 flex'>
        <div
          className={`w-1/12 ${color} rounded-xl mx-2 flex items-center justify-center`}
        >
          <Icon>{icon}</Icon>
        </div>
        <div
          className={`w-11/12 ${color} rounded-xl font-medium text-xl mx-2 flex items-center`}
        >
          <span className='mx-4'>{option.opcion}</span>
        </div>
      </div>
      <div className='w-2/12 flex items-center justify-center'>
        <button
          type='button'
          onClick={onEdit}
          title='Editar'
          className='focus:outline-none hover:scale-110 px-1'
        >
          <span className='iconify text-3xl' data-icon='eva:edit-outline' />
        </button>
        <button
          type='button'
          onClick={onDelete}
          tittle='Eliminar'
          className='focus:outline-none hover:scale-110 px-1'
        >
          <span className='iconify text-3xl' data-icon='bxs:trash' />
        </button>
      </div>
      <ConfirmDialog
        showModal={showConfirmDialog}
        setShowModal={setShowConfirmDialog}
        title='Confirmar borrado'
        text='¿Está seguro que desea eliminar la opción?'
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ItemOption;
