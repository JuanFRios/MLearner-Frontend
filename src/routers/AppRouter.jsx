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
import ContentManagement from 'pages/admin/ContentManagement';
import AdminStatistics from 'pages/admin/AdminStatistics';
import ModuleContent from 'pages/admin/ModuleContent';
import CreateReadingLesson from 'pages/admin/CreateReadingLesson';
import CreateQuizLesson from 'pages/admin/CreateQuizLesson';
import CreateCodeLesson from 'pages/admin/CreateCodeLesson';
import LessonPreview from 'pages/admin/LessonPreview';
import { AddEdit } from 'pages/admin/CreateEditCodeLesson';
import { CreateEditQuizLesson } from 'pages/admin/CreateEditQuizLesson';
import { CreateEditReadingLesson } from 'pages/admin/CreateEditReadingLesson';

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
        <Route path='/admin/course' element={<ContentManagement />} />
        <Route
          path='/admin/course/module/:module'
          element={<ModuleContent />}
        />
        <Route
          path='/admin/course/module/:module/reading'
          element={<CreateEditReadingLesson />}
        />
        <Route
          path='/admin/course/module/:module/reading/:id'
          element={<CreateEditReadingLesson />}
        />
        <Route
          path='/admin/course/module/:module/quiz'
          element={<CreateEditQuizLesson />}
        />
        <Route
          path='/admin/course/module/:module/quiz/:id'
          element={<CreateEditQuizLesson />}
        />
        <Route
          path='/admin/course/module/:module/code'
          element={<CreateCodeLesson />}
        />
        <Route
          path='/admin/course/module/:module/code/:id'
          element={<CreateCodeLesson />}
        />
        <Route
          path='/admin/course/module/:module/code/e/:id'
          element={<AddEdit />}
        />
        <Route
          path='/admin/course/module/:module/code/e'
          element={<AddEdit />}
        />
        <Route path='/admin/statistics' element={<AdminStatistics />} />
      </Route>
      <Route path='/' element={<LessonLayout />}>
        <Route path='/lesson/:id' element={<Lesson />} />
      </Route>
      <Route path='/' element={<LessonLayout />}>
        <Route path='preview/lesson/:id' element={<LessonPreview />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
