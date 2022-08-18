import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LessonTypeIcon } from 'constants/Lesson';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import NewOption from 'components/admin/lessons/quiz/NewOption';
import ItemOption from 'components/admin/lessons/quiz/ItemOption';

const CreateQuizLesson = () => {
  const navigate = useNavigate();
  const { module } = useParams();
  const [showNewOptionModal, setShowNewOptionModal] = useState(false);
  const [lesson, setLesson] = useState([]);
  const [opciones, setOpciones] = useState([]);
  const { form, formData, updateFormData } = useFormData();

  useEffect(() => {
    const quizLesson = {
      ...lesson,
      vidas: formData.vidas,
      puntaje: formData.puntaje,
      titulo: formData.titulo,
      pregunta: { enunciado: formData.enunciado, opciones: [...opciones] },
      modulo: module,
    };
    setLesson(quizLesson);
  }, [opciones, formData]);

  function onSave() {
    console.log(lesson);
  }

  function onBack() {
    navigate(`/admin/course/module/${module}`);
    console.log(formData);
  }
  function onNewOption() {
    setShowNewOptionModal(true);
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
              name='titulo'
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
          onClick={onNewOption}
        >
          <span className='iconify text-2xl mx-1' data-icon='carbon:add-alt' />
          <span> Añadir opción</span>
        </button>
        <button
          type='button'
          className='btn bg-light_green_2 text-white hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onSave}
        >
          <span className='iconify text-2xl mx-1' data-icon='ion:save' />
          <span> Guardar</span>
        </button>
      </div>
      <div className='flex flex-col mt-10'>
        <h1 className='w-full text-center text-2xl fotn-bold'>
          Contenido de la lección
        </h1>
        {opciones.length > 0 ? (
          opciones.map((opcion) => (
            <ItemOption option={opcion} key={opcion.descripcion} />
          ))
        ) : (
          <p className='w-full text-center text-slate-400 mt-4'>
            **Aún no se han creado opciones para el enunciado**
          </p>
        )}
      </div>
      <NewOption
        showModal={showNewOptionModal}
        setShowModal={setShowNewOptionModal}
        opciones={opciones}
        setOpciones={setOpciones}
        module={module}
      />
    </div>
  );
};

export default CreateQuizLesson;
