/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Footer from 'components/Footer';
import { useDispatch } from 'react-redux';
import { renewToken } from 'actions/auth';
import Dashboard from 'pages/Dashboard';
import LoadingHome from 'components/loading/LoadingHome';
import Lesson from 'pages/Lesson';
import LessonLayout from 'layouts/LessonLayout';

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
          <Route path='' element={<Login />} />
        </Route>
        <Route path='/' element={<PrivateLayout />}>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/statics' element={<Footer />} />
        </Route>
        <Route path='/' element={<LessonLayout />}>
          <Route path='/lesson/:id' element={<Lesson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
