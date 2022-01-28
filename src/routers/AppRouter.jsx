/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import PublicLayout from 'layouts/PublicLayout';
import Footer from 'components/Footer';
import Dashboard from 'pages/Dashboard';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route path='/' element={<Login />} />
      </Route>
      <Route path='/Home' element={<Dashboard />} />
      <Route path='/Statics' element={<Footer />} />
      <Route path='/Leccion' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
