import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LessonLayout = () => (
  <div className='flex justify-center w-full'>
    <div className='min-w-190 h-screen'>
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  </div>
);

export default LessonLayout;
