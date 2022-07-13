import ProgressBar from 'components/statistics/ProgressBar';
import React from 'react';

const ItemTop = ({ typeTop, icono, color, element }) => {
  console.log(typeTop, element, icono);
  return (
    <div className='p-2 max-w-sm mx-auto mb-1 bg-white rounded-xl shadow-lg flex items-center space-x-4'>
      <div className='shrink-0'>
        <img
          className='h-12 w-12 rounded-full'
          src={element.urlImagen}
          alt='ChitChat Logo'
        />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>
          {element.nombreCompleto}
        </div>
        <div className='p-1 flex items-center'>
          {typeTop === 'PERCENTAGE' && <ProgressBar porcentaje='30' />}
          {typeTop !== 'PERCENTAGE' && (
            <>
              <span className={`iconify ${color} text-2xl`} data-icon={icono} />
              <span className={`${color} text-xl ml-2`}>{element.valor}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemTop;
