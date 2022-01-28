import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PublicLayout = () => (
  <div className='w-full h-screen'>
    <Outlet />
    <ToastContainer />
  </div>
);

export default PublicLayout;
