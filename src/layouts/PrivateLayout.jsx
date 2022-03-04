import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { renewToken } from 'actions/auth';

const PrivateLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(async () => {
    const isLoggedIn = await dispatch(renewToken());
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [dispatch]);
  return (
    <div className='flex justify-center w-full'>
      <div className='min-w-190 h-screen'>
        <Sidebar />
        <Header />
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
};

export default PrivateLayout;
