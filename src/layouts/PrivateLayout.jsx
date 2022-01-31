import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateLayout = () => (
  <div className='w-full h-screen'>
    <Sidebar />
    <Header />
    <Outlet />
    <ToastContainer />
  </div>
);

export default PrivateLayout;
