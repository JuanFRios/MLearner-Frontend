import React from 'react';
import Footer from 'components/Footer';
import Input from 'components/utils/Input';
// import backgroundLogin from 'assets/background-login.svg';

const Login = () => (
  <div className='h-full flex flex-col justify-around'>
    <div className='w-128 h-72 flex flex-col justify-around items-center absolute left-40'>
      <h1 className='text-6xl w-full text-center pb-10'>Inicio de sesión</h1>
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
      <button type='submit' className='btn btn-blue w-2/4'>
        Ingresar
      </button>
    </div>
    <Footer />
  </div>
);

export default Login;
