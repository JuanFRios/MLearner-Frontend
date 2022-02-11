import React from 'react';

const Live = ({ type }) => {
  if (type === 'LOST') {
    return (
      <span
        className='iconify text-5xl text-red-600'
        data-icon='clarity:heart-broken-line'
      />
    );
  }
  return (
    <span
      className='iconify text-5xl text-red-600'
      data-icon='clarity:heart-solid'
    />
  );
};

export default Live;
