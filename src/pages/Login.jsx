import React, { useState } from 'react';
import Footer from 'components/Footer';
import Input from 'components/utils/Input';
// import backgroundLogin from 'assets/background-login.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='bg'>
      <div className='h-full flex flex-col justify-end'>
        <div className='w-128 h-96 flex flex-col justify-around items-center absolute bottom-1/4 right-20 bg-gradient-to-r from-gray-100 rounded-xl'>
          <h1 className='text-6xl w-full text-center pt-8 pb-12 leading-none font-bold'>
            Inicio de sesión
          </h1>
          <form
            className='w-full h-full flex flex-col justify-around items-center'
            onSubmit={handleSubmit}
          >
            <Input
              name='usuario'
              type='text'
              placeholder='Escribe tu usuario institucional'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name='contraseña'
              type='password'
              placeholder='Escribe tu contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
