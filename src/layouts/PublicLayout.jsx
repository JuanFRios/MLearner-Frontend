import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => (
  <div className='w-full h-full'>
    <div className='w-full h-full'>
      <div className='w-full h-full'>
        <Outlet />
      </div>
    </div>
  </div>
);

export default PublicLayout;
