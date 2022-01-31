import React from 'react';
import Footer from 'components/Footer';
import Input from 'components/utils/Input';
import useFormData from 'hooks/useFormData';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from 'actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const { form, formData, updateFormData } = useFormData();

  async function onSubmit(event) {
    event.preventDefault();
    dispatch(startLoginEmailPassword(formData));
  }

  return (
    <div className='bg'>
      <div className='h-full flex flex-col justify-end'>
        <div className='w-128 h-96 flex flex-col justify-around items-center absolute bottom-1/4 right-5 bg-gradient-to-r from-gray-100 rounded-xl'>
          <img
            className='pt-4'
            src='https://res.cloudinary.com/proyecto-integrador-udea-2022/image/upload/c_crop,g_south,h_170,y_49/v1643328200/MLearner_1_jex1ky.png'
            alt=''
          />
          <form
            ref={form}
            onChange={updateFormData}
            className='w-full h-full flex flex-col justify-around items-center'
            onSubmit={onSubmit}
          >
            <Input
              name='usuario'
              type='text'
              placeholder='Escribe tu usuario institucional'
            />
            <Input
              name='contraseña'
              type='password'
              placeholder='Escribe tu contraseña'
            />
            <button type='submit' className='btn btn-blue w-2/4 pt-8'>
              Ingresar
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
