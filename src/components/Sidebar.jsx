import { startLogout } from 'actions/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  let selectedH;
  let selectedE;
  let selectedS;
  function onSubmit(event) {
    event.preventDefault();
    dispath(startLogout());
    navigate('/');
  }

  switch (location.pathname) {
    case '/home':
      selectedH = 'border-green-500 text-green-500';
      selectedE =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      selectedS =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      break;
    case '/credits':
      selectedE = 'border-green-500 text-green-500';
      selectedH =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      selectedS =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      break;
    case '/statistics':
      selectedS = 'border-green-500 text-green-500';
      selectedE =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      selectedH =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      break;
    default:
      selectedH = 'border-green-500 text-green-500';
      selectedE =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
      selectedS =
        'border-gray-200 text-gray-200 hover:border-green-500  hover:text-green-500';
  }

  return (
    <div className='flex'>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className='backgroudSB w-80 fixed h-full flex flex-col items-center content-center  z-20 '>
        <div className='px-8 py-12'>
          <div className='flex flex-col items-center'>
            <div>
              <img
                src={user ? user.urlImagen : ''}
                className='rounded-full'
                alt=''
              />
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
                <Link to='/home'>
                  <span className='ml-2 text-2xl font-bold'>Aprender</span>
                </Link>
              </div>
            </li>
            <li
              className={`${selectedS} flex w-full justify-between border-b cursor-pointer items-center mb-6`}
            >
              <div className='flex items-center pb-1 '>
                <span
                  className='iconify big-icon'
                  data-icon='ic:sharp-query-stats'
                />
                <Link to='/statistics'>
                  <span className='ml-2 text-2xl font-bold'>Estadísticas</span>
                </Link>
              </div>
            </li>
            <li
              className={`${selectedE} flex w-full justify-between border-b cursor-pointer items-center mb-6`}
            >
              <div className='flex items-center pb-1 '>
                <span className='iconify big-icon' data-icon='charm:info' />
                <Link to='/credits'>
                  <span className='ml-2 text-2xl font-bold'>Acerca de</span>
                </Link>
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
