import React, { useState } from 'react';
import Footer from 'components/Footer';
import Input from 'components/utils/Input';
import useFormData from 'hooks/useFormData';
import axios from 'axios';
// import backgroundLogin from 'assets/background-login.svg';

const Login = () => {
  const { form, formData, updateFormData } = useFormData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://restserver-pi.herokuapp.com/api/auth',
      header: { 'Content-Type': 'application/json' },
      data: formData,
    };
    const respuestaAxios = await axios.request(options);
    // eslint-disable-next-line no-console
    console.log(respuestaAxios);
  }

  return (
    <div className='bg'>
      <div className='h-full flex flex-col justify-end'>
        <div className='w-128 h-96 flex flex-col justify-around items-center absolute bottom-1/4 right-20 bg-gradient-to-r from-gray-100 rounded-xl'>
          <h1 className='text-6xl w-full text-center pt-8 pb-12 leading-none font-bold'>
            Inicio de sesión
          </h1>
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
