import React from 'react';
import Compiler from 'components/lesson/Compiler';

const ItemContent = ({ type, value, valueCode }) => {
  let item;
  switch (type) {
    case 'TEXTO':
      item = (
        <div className='pl-4 pb-3'>
          <p className='text-justify text-xl'>{value}</p>
        </div>
      );
      break;
    case 'SUBTITULO':
      item = (
        <div className='pl-4 pb-3'>
          <p className='text-justify font-bold text-xl'>{value}</p>
        </div>
      );
      break;
    case 'ESPACIO':
      item = <br />;
      break;
    case 'TEXTO-CODIGO':
      item = (
        <div className='pl-4 pb-3'>
          <pre>
            <code>{value}</code>
          </pre>
        </div>
      );
      break;
    case 'LINK':
      item = (
        <div className='pl-4 pb-3'>
          <a
            href={value}
            target='_blank'
            className='text-justify text-xl text-sky-500 underline'
            rel='noreferrer'
          >
            {value}
          </a>
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
          <img src={value} alt='' className='w-full h-fit' />
        </div>
      );
      break;
    case 'LISTA':
      item = (
        <div className='pl-16 pb-3'>
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
        <div className='pt-8 pl-1'>
          <Compiler sampleCodev={valueCode} />
        </div>
      );
  }
  return <div className='pr-3'>{item}</div>;
};

export default ItemContent;
