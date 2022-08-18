import React from 'react';

const ItemContent = ({ item }) => {
  function onEdit() {
    console.log('');
  }
  function onDelete() {
    console.log('');
  }

  return (
    <div className='w-full flex min-h-16 h-fit my-2'>
      <div className='w-10/12 flex'>
        <div className='w-3/12 bg-slate-100 rounded-xl py-2 mx-2 flex font-bold items-center justify-center'>
          <span className='mx-4'>{item.clave}</span>
        </div>
        <div className='w-9/12  bg-slate-100 rounded-xl py-2 mx-2 font-light flex items-center'>
          <span className='mx-4'>{item.valor}</span>
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
    </div>
  );
};

export default ItemContent;
