import { startLogout } from 'actions/auth';
import {
  adminMenuOptions,
  studentMenuOptions,
  ROLE_STUDENT,
  ROLE_ADMIN,
} from 'constants/Menu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let role;
  if (!user) {
    return <span>No user</span>;
  }
  if (user) {
    switch (user.rol) {
      case ROLE_STUDENT:
        role = 'Estudiante';
        break;
      case ROLE_ADMIN:
        role = 'Administrador';
        break;
      default:
        role = 'Estudiante';
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    dispath(startLogout());
    navigate('/');
  }

  return (
    <div className='flex'>
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
            <div className='bg-slate-100 rounded-full text-dark_blue_1 w-full flex justify-center'>
              <span>{role}</span>
            </div>
          </div>
          <MenuOptions user={user} />
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
    </div>
  );
};

const MenuOptions = ({ user }) => {
  let menuItems;
  if (user.rol === ROLE_STUDENT) {
    menuItems = studentMenuOptions.map(({ text, route, icon }) => (
      <MenuItem text={text} route={route} icon={icon} key={route} />
    ));
  } else if (user.rol === ROLE_ADMIN) {
    menuItems = adminMenuOptions.map(({ text, route, icon }) => (
      <MenuItem text={text} route={route} icon={icon} key={route} />
    ));
  }
  return <ul className='mt-12 '>{menuItems}</ul>;
};

const MenuItem = ({ text, route, icon }) => {
  const location = useLocation();
  return (
    <li
      className={
        location.pathname.includes(route)
          ? 'active-menu-item'
          : 'inactive-menu-item'
      }
    >
      <div className='flex items-center pb-1'>
        <span className='iconify big-icon' data-icon={icon} />
        <Link to={route}>
          <span className='ml-2 text-2xl font-bold'>{text}</span>
        </Link>
      </div>
    </li>
  );
};

export default Sidebar;
