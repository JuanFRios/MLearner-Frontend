import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LessonTypeIcon } from 'constants/Lesson';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import ResourcesModal from 'components/admin/modules/ResourcesModal';

const CreateQuizLesson = () => {
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
    setShowResourcesModal(false);
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
            data-icon={LessonTypeIcon.quiz.icon}
          />
          <span className='ml-4'>Nueva lección tipo quiz</span>
        </div>
      </div>
      <form
        ref={form}
        onChange={updateFormData}
        className='w-full h-full flex flex-col justify-between items-center pt-6'
      >
        <div className='flex w-full'>
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
        <div className='w-full mt-10'>
          <InputLesson
            text='Enunciado'
            name='enunciado'
            type='text'
            placeholder='Escribe el enunciado de la pregunta'
          />
        </div>
      </form>
      <div className='flex justify-end mt-10'>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onResources}
        >
          <span className='iconify text-2xl mx-1' data-icon='carbon:add-alt' />
          <span> Añadir opción</span>
        </button>
      </div>
      <div className='flex flex-col mt-10'>
        <h1 className='w-full text-center text-2xl fotn-bold'>
          Contenido de la lección
        </h1>
        <p className='w-full text-center text-slate-400 mt-4'>
          **Aún no se han creado opciones para el enunciado**
        </p>
      </div>
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
        module={module}
      />
    </div>
  );
};

export default CreateQuizLesson;
