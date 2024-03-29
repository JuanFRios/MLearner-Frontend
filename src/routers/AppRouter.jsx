/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from 'pages/Login';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import LessonLayout from 'layouts/LessonLayout';
import Statistics from 'pages/statistics';
import ContentManagement from 'pages/admin/dashboard/ContentManagement';
import AdminStatistics from 'pages/admin/AdminStatistics';
import ModuleContent from 'pages/admin/dashboard/module-content/ModuleContent';
import LessonPreview from 'pages/admin/LessonPreview';
import { CreateEditQuizLesson } from 'pages/admin/lessons-management/quiz/CreateEditQuizLesson';
import { CreateEditReadingLesson } from 'pages/admin/lessons-management/reading/CreateEditReadingLesson';
import { CreateEditCodeLesson } from 'pages/admin/lessons-management/code/CreateEditCodeLesson';
import Dashboard from 'pages/student/dashboard/Dashboard';
import About from 'pages/student/about/about';
import Lesson from 'pages/student/lesson/Lesson';

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
          element={<CreateEditCodeLesson />}
        />
        <Route
          path='/admin/course/module/:module/code/:id'
          element={<CreateEditCodeLesson />}
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
