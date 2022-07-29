import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LessonTypeIcon } from 'constants/Lesson';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import InputLessonCode from 'components/utils/InputLessonCode';

const CreateCodeLesson = () => {
  console.log('first');
  const navigate = useNavigate();
  const { module } = useParams();
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const { form, formData, updateFormData } = useFormData();
  function onBack() {
    navigate(`/admin/course/module/${module}`);
    console.log(formData);
  }
  function onResources() {
    setShowResourcesModal(true);
  }
  return (
    <div className='private-container'>
      <div className='mb-4 flex items-center'>
        <button
          type='button'
          onClick={onBack}
          className='focus:outline-none hover:scale-110'
        >
          <span className='iconify big-icon' data-icon='bx:arrow-back' />
        </button>
        <div className='text-2xl ml-4 flex items-center'>
          <span
            className='iconify big-icon'
            data-icon={LessonTypeIcon.code.icon}
          />
          <span className='ml-4'>Nueva lección tipo código</span>
        </div>
      </div>
      <form
        ref={form}
        onChange={updateFormData}
        className='w-full h-full flex flex-col justify-between items-center pt-6'
      >
        <div className='w-full flex'>
          <div className='w-8/12 mr-8'>
            <InputLesson
              text='Nombre de la lección'
              name='nombre'
              type='text'
              placeholder='Escribe el nombre de la lección'
            />
          </div>
          <div className='w-2/12 mr-8'>
            <InputLesson text='Puntaje' name='puntaje' type='number' />
          </div>
          <div className='w-2/12'>
            <InputLesson text='Vidas' name='vidas' type='number' />
          </div>
        </div>

        <div className='flex justify-end mt-10 w-full'>
          <button
            type='button'
            className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
            onClick={onResources}
          >
            <span> Recursos</span>
          </button>
        </div>
        <div className='flex flex-col mt-10'>
          <h1 className='w-full text-center text-2xl fotn-bold'>
            Contenido de la lección
          </h1>
        </div>
        <InputLessonCode text='Solución' name='solucion' />
        <InputLessonCode text='Código precargado' name='precargado' />
        <InputLessonCode text='Código de ejemplo' name='example' />
        <InputLessonCode text='Reglas de validación' name='reglas' />
        <InputLessonCode text='Pistas' name='pistas' />
      </form>
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
        module={module}
      />
    </div>
  );
};

export default CreateCodeLesson;
