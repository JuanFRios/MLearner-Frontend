import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LessonTypeIcon } from 'constants/Lesson';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import InputLessonCode from 'components/utils/InputLessonCode';
import { toast } from 'react-toastify';
import { validateCodeLesson } from 'utils/validators';
import { useDispatch } from 'react-redux';
import { saveLesson, getLessonById } from 'actions/lessons';

const CreateCodeLesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [valid, setValid] = useState(false);
  const { module } = useParams();
  const [lesson, setLesson] = useState({});
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const { form, formData, updateFormData, upData } = useFormData();

  useEffect(() => {
    if (id) {
      dispatch(getLessonById(id)).then((l) => {
        console.log(l.contenidoLeccion.leccionActual);
        setLesson(l.contenidoLeccion.leccionActual);
        upData(l.contenidoLeccion.leccionActual);
        console.log(formData);
      });
    }
  }, []);

  useEffect(() => {
    const codeLesson = {
      ...lesson,
      vidasTotales: formData.vidasTotales,
      puntaje: formData.puntaje,
      titulo: formData.titulo,
      contenido: [
        {
          clave: 'CODIGO',
          valor: 'codigo',
          valorPreExerciseCode: formData.valorPreExerciseCode,
          valorSampleCode: formData.valorSampleCode,
          valorSolution: formData.valorSolution,
          valorSCT: formData.valorSCT,
          valorHint: formData.valorHint,
        },
      ],
      tipo: 'CODIGO',
      modulo: module,
    };
    setLesson(codeLesson);
    const validation = validateCodeLesson(codeLesson);
    setValid(!validation.isError);
    if (valid) {
      localStorage.setItem(
        'lessonPreview',
        JSON.stringify(validation.codeLessonCast)
      );
    }
    console.log(validation);
  }, [formData]);

  const onPreview = () => {
    navigate(`/preview/lesson`);
  };

  const onSave = async () => {
    const { isError, errors, codeLessonCast } = validateCodeLesson(lesson);
    if (isError) {
      toast.error(errors[0], {
        position: 'top-center',
      });
    } else {
      const lessonCreated = await dispatch(saveLesson(codeLessonCast));
      if (lessonCreated) {
        toast.success('Lección creada correctamente', {
          position: 'top-center',
        });
      }
      navigate(`/admin/course/module/${module}`);
    }
  };

  function onBack() {
    navigate(`/admin/course/module/${module}`);
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
              name='titulo'
              type='text'
              placeholder='Escribe el nombre de la lección'
            />
          </div>
          <div className='w-2/12 mr-8'>
            <InputLesson text='Puntaje' name='puntaje' type='number' />
          </div>
          <div className='w-2/12'>
            <InputLesson text='Vidas' name='vidasTotales' type='number' />
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
          <button
            type='button'
            disabled={!valid}
            className='btn bg-light_green_2 text-white hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
            onClick={onPreview}
          >
            <span className='iconify text-2xl mx-1' data-icon='ion:save' />
            <span> Visualizar</span>
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
        </div>
        <InputLessonCode text='Solución' name='valorSolution' />
        <InputLessonCode text='Código precargado' name='valorPreExerciseCode' />
        <InputLessonCode text='Código de ejemplo' name='valorSampleCode' />
        <InputLessonCode text='Reglas de validación' name='valorSCT' />
        <InputLessonCode text='Pistas' name='valorHint' />
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
