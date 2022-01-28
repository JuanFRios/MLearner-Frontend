/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import PublicLayout from 'layouts/PublicLayout';
import Footer from 'components/Footer';
import { useDispatch } from 'react-redux';
import { renewToken } from 'actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    const isLoggedIn = await dispatch(renewToken());
    if (!isLoggedIn) {
      // redireccionar al login
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='/' element={<Login />} />
        </Route>
        <Route path='/Home' element={<Footer />} />
        <Route path='/Statics' element={<Footer />} />
        <Route path='/Leccion' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
