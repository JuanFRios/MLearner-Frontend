import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => (
  <div className='w-full h-screen'>
    <Outlet />
  </div>
);

export default PublicLayout;
