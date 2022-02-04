import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    // Hacer el dispatch para logout en redux
    navigate('/');
  }

  return (
    <div className='flex'>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className='backgroudSB w-80 fixed h-full flex flex-col items-center content-center  z-20 '>
        <div className='px-8 py-12'>
          <div className='flex flex-col items-center'>
            <div className='circle'>F</div>
            <p className='text-gray-200 py-3 text-3xl font-bold'>
              Felipe Morales
            </p>
          </div>
          <ul className='mt-12 '>
            <li className='flex w-full justify-between border-b text-gray-200 hover:text-green-500 cursor-pointer items-center mb-6'>
              <div className='flex items-center pb-1'>
                <span
                  className='iconify big-icon'
                  data-icon='majesticons:light-bulb'
                />
                <span className='ml-2 text-2xl font-bold'>Aprender</span>
              </div>
            </li>
            <li className='flex w-full justify-between border-b text-gray-200 hover:text-green-500 cursor-pointer items-center'>
              <div className='flex items-center pb-1'>
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
