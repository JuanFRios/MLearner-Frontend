import React from 'react';

const ItemOption = ({ option }) => {
  function onEdit() {
    console.log('');
  }
  function onDelete() {
    console.log('');
  }
  const icon =
    option.esCorrecta === 'true' ? 'bx:check-circle' : 'ci:off-outline-close';

  const bg = option.esCorrecta === 'true' ? 'bg-green-100' : 'bg-red-100';

  return (
    <div className='w-full flex h-16 my-2'>
      <div className='w-10/12 flex'>
        <div
          className={`w-1/12 ${bg} rounded-xl mx-2 flex items-center justify-center`}
        >
          <span className='iconify big-icon' data-icon={icon} />
        </div>
        <div
          className={`w-11/12 ${bg} rounded-xl font-medium text-xl mx-2 flex items-center`}
        >
          <span className='mx-4'>{option.descripcion}</span>
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

export default ItemOption;
