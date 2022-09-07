/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { getLessonById, saveLesson, editLesson } from 'actions/lessons';
import { LessonTypeIcon } from 'constants/Lesson';
import LessonInput from 'components/utils/LessonInput';
import { toast } from 'react-toastify';
import {
  quizLessonInitialValues,
  quizLessonPutInitialValues,
} from 'utils/lessons';
import ItemOption from 'components/admin/lessons/quiz/ItemOption';
import AddEditOption from 'components/admin/lessons/quiz/AddEditOption';

function CreateEditQuizLesson() {
  const { id, module } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showNewOptionModal, setShowNewOptionModal] = useState(false);
  const [lesson, setLesson] = useState(quizLessonInitialValues(module));
  const [itemEdit, setItemEdit] = useState(null);
  const isAddMode = !id;

  function setOpcion(opcion) {
    setLesson({
      ...lesson,
      pregunta: {
        descripcion: { ...lesson.pregunta.descripcion },
        opciones: [...lesson.pregunta.opciones, opcion],
      },
    });
  }

  function deleteOption(_id) {
    setLesson({
      ...lesson,
      pregunta: {
        descripcion: { ...lesson.pregunta.descripcion },
        opciones: lesson.pregunta.opciones.filter((o) => o._id !== _id),
      },
    });
  }

  function editOption(option) {
    const newOptions = lesson.pregunta.opciones.map((o) => {
      if (o._id === option._id) {
        return option;
      }
      return o;
    });
    setLesson({
      ...lesson,
      pregunta: {
        descripcion: { ...lesson.pregunta.descripcion },
        opciones: [...newOptions],
      },
    });
  }

  useEffect(() => {
    if (!isAddMode) {
      dispatch(getLessonById(id)).then((l) => {
        setLesson(quizLessonPutInitialValues(l, module));
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required('titulo is required'),
    puntaje: Yup.number().required('puntaje is required'),
    vidasTotales: Yup.number().required('vidas is required'),
    pregunta: Yup.object().shape({
      enunciado: Yup.string().required('enunciado is required'),
    }),
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    const lessonToSave = {
      ...fields,
      pregunta: { ...fields.pregunta, opciones: lesson.pregunta.opciones },
    };
    setStatus();
    if (isAddMode) {
      createLesson(lessonToSave, setSubmitting);
    } else {
      updateLesson(id, lessonToSave, setSubmitting);
    }
  }

  async function createLesson(fields, setSubmitting) {
    const lessonCreated = await dispatch(saveLesson(fields));
    if (lessonCreated) {
      toast.success('Lección creada correctamente', {
        position: 'top-center',
      });
      setSubmitting(true);
    }
    navigate(`/admin/course/module/${module}`);
  }

  async function updateLesson(lid, fields, setSubmitting) {
    const lessonCreated = await dispatch(editLesson(lid, fields));
    if (lessonCreated) {
      toast.success('Lección actualizada correctamente', {
        position: 'top-center',
      });
      setSubmitting(true);
    }
    navigate(`/admin/course/module/${module}`);
  }

  function onBack() {
    navigate(`/admin/course/module/${module}`);
  }

  function onNewOption() {
    setItemEdit(null);
    setShowNewOptionModal(true);
  }

  if (isLoading) {
    return <div className='private-container'>Cargando...</div>;
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
          <span className='ml-4'>
            {' '}
            {isAddMode ? 'Nueva' : 'Editar'} lección tipo quiz
          </span>
        </div>
      </div>
      <Formik
        initialValues={lesson}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className='w-full h-full flex flex-col justify-between items-center pt-6'>
            <div className='w-full flex'>
              <div className='w-8/12 mr-8'>
                <LessonInput
                  name='titulo'
                  type='text'
                  placeholder='Ingrese el título de la lección'
                  text='Nombre de la lección'
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div className='w-2/12 mr-8'>
                <LessonInput
                  name='puntaje'
                  type='number'
                  placeholder=''
                  text='Puntaje'
                  errors={errors}
                  touched={touched}
                />
              </div>
              <div className='w-2/12'>
                <LessonInput
                  name='vidasTotales'
                  type='number'
                  placeholder=''
                  text='Vidas'
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>
            <div className='w-full mt-10'>
              <LessonInput
                text='Enunciado'
                name='pregunta.enunciado'
                type='text'
                placeholder='Escribe el enunciado de la pregunta'
                errors={errors}
                touched={touched}
              />
            </div>
            <div className='flex justify-end mt-10 w-full'>
              <button
                type='button'
                className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
                onClick={onNewOption}
              >
                <span
                  className='iconify text-2xl mx-1'
                  data-icon='carbon:add-alt'
                />
                <span> Añadir opción</span>
              </button>

              <button
                type='submit'
                className='btn bg-light_green_2 text-white hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
              >
                <span className='iconify text-2xl mx-1' data-icon='ion:save' />
                <span> Guardar</span>
              </button>
            </div>
            <div className='flex flex-col mt-10 w-full'>
              <h1 className='w-full text-center text-2xl fotn-bold'>
                Contenido de la lección
              </h1>
              {lesson.pregunta.opciones.length > 0 ? (
                lesson.pregunta.opciones.map((opcion, index) => (
                  <ItemOption
                    option={opcion}
                    key={opcion.opcion + index}
                    setItemEdit={setItemEdit}
                    setShowEditItem={setShowNewOptionModal}
                    handleDelete={deleteOption}
                  />
                ))
              ) : (
                <p className='w-full text-center text-slate-400 mt-4'>
                  **Aún no se han creado opciones para el enunciado**
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
      <AddEditOption
        item={itemEdit}
        showModal={showNewOptionModal}
        setShowModal={setShowNewOptionModal}
        setOpciones={setOpcion}
        editOption={editOption}
      />
    </div>
  );
}

export { CreateEditQuizLesson };
