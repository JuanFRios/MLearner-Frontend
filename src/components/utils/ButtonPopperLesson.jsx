import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

const ButtonPopperLesson = ({ onAddOther, onAddSpace }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <Box>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <div className='bg-light_blue_2 mt-1 flex flex-col rounded-md justify-center items-center px-8 py-4 text-white font-bold text-lg'>
                <button
                  type='button'
                  className='hover:scale-110 focus:outline-none'
                  onClick={() => {
                    onAddSpace();
                    setOpen(false);
                  }}
                >
                  Espacio
                </button>
                <button
                  type='button'
                  className='hover:scale-110 focus:outline-none'
                >
                  Código
                </button>
                <button
                  type='button'
                  className='hover:scale-110 focus:outline-none'
                  onClick={() => {
                    onAddOther();
                    setOpen(false);
                  }}
                >
                  Otro
                </button>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
      <button
        type='button'
        className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
        onClick={handleClick('bottom')}
      >
        <span className='iconify text-2xl mx-1' data-icon='carbon:add-alt' />
        <span> Agregar item</span>
      </button>
    </Box>
  );
};

export default ButtonPopperLesson;
