import React from 'react';
import Compiler from 'components/lesson/Compiler';

const ItemContent = ({ type, value }) => {
  let item;
  switch (type) {
    case 'TEXTO':
      item = (
        <div className='pl-4 pb-3'>
          <p className='text-justify text-xl'>{value}</p>
        </div>
      );
      break;
    case 'TITULO':
      item = (
        <div className='py-4'>
          <p className='font-bold text-2xl'>{value}</p>
        </div>
      );
      break;
    case 'IMAGEN':
      item = (
        <div className='flex justify-center'>
          <img
            src='https://res.cloudinary.com/proyecto-integrador-udea-2022/image/upload/v1644539720/python-logo_asgkqg.jpg'
            alt=''
            className='w-40 h-fit'
          />
        </div>
      );
      break;
    case 'LISTA':
      item = (
        <div className='pl-8 pb-3'>
          <ul className='list-disc'>
            {value.split(';').map((i) => (
              <li key={i} className='text-xl'>
                {i}
              </li>
            ))}
          </ul>
        </div>
      );
      break;
    default:
      item = (
        <div className='pt-8'>
          <Compiler />
        </div>
      );
  }
  return <div>{item}</div>;
};

export default ItemContent;
