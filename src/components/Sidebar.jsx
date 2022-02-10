import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  let selectedH;
  let selectedE;
  function onSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    // Hacer el dispatch para logout en redux
    navigate('/');
  }

  if (location.pathname === '/home') {
    selectedH = 'border-green-500 text-green-500';
    selectedE =
      'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
    // eslint-disable-next-line no-console
    console.log('Entro');
  } else {
    selectedE = 'border-green-500 text-green-500';
    selectedH =
      'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
  }

  return (
    <div className='flex'>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className='backgroudSB w-80 fixed h-full flex flex-col items-center content-center  z-20 '>
        <div className='px-8 py-12'>
          <div className='flex flex-col items-center'>
            <div className='circle'>
              <img src={user ? user.urlImagen : ''} alt='' />
            </div>
            <p className='text-gray-200 py-3 text-2xl font-bold text-center'>
              {user ? user.nombreCompleto : ''}
            </p>
          </div>
          <ul className='mt-12 '>
            <li
              className={`${selectedH} flex w-full justify-between border-b cursor-pointer items-center mb-6`}
            >
              <div className='flex items-center pb-1'>
                <span
                  className='iconify big-icon'
                  data-icon='majesticons:light-bulb'
                />
                <span className='ml-2 text-2xl font-bold'>Aprender</span>
              </div>
            </li>
            <li
              className={`${selectedE} flex w-full justify-between border-b cursor-pointer items-center mb-6`}
            >
              <div className='flex items-center pb-1 '>
                <span
                  className='iconify big-icon'
                  data-icon='ic:sharp-query-stats'
                />
                <span className='ml-2 text-2xl font-bold'>Estadisticas</span>
              </div>
            </li>
          </ul>
        </div>
        <div className='px-8 py-3 absolute bottom-4 text-gray-200 '>
          <div className='flex items-center hover:text-green-500 cursor-pointer'>
            <span
              className='iconify big-icon'
              data-icon='ic:twotone-exit-to-app'
            />
            <button type='button' onClick={onSubmit}>
              <span className='text-xl ml-2 font-semibold'>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar ends */}
    </div>
  );
};

export default Sidebar;
