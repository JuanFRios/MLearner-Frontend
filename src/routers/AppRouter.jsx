/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from 'pages/Login';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import Dashboard from 'pages/Dashboard';
import Lesson from 'pages/Lesson';
import LessonLayout from 'layouts/LessonLayout';
import About from 'pages/about';
import Statistics from 'pages/statistics';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route path='' element={<Login />} />
      </Route>
      <Route path='/' element={<PrivateLayout />}>
        <Route path='/credits' element={<About />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/home' element={<Dashboard />} />
      </Route>
      <Route path='/' element={<LessonLayout />}>
        <Route path='/lesson/:id' element={<Lesson />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
