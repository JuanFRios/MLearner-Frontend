/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { getLessonById, saveLesson, editLesson } from 'actions/lessons';
import { LessonTypeIcon } from 'constants/Lesson';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import LessonInput from 'components/utils/LessonInput';
import { toast } from 'react-toastify';
import ButtonPopperLesson from 'components/utils/ButtonPopperLesson';
import { v4 as uuidv4 } from 'uuid';
import ItemContent from 'components/admin/lessons/reading/ItemContent';
import {
  readingLessonInitialValues,
  readingLessonPutInitialValues,
} from 'utils/lessons';
import AddEditItemContent from 'components/admin/lessons/reading/AddEditItemContent';

function CreateEditReadingLesson() {
  const { id, module } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showNewItemModal, setShowNewItemModal] = useState(false);
  const [lesson, setLesson] = useState(readingLessonInitialValues(module));
  const [itemEdit, setItemEdit] = useState(null);
  const isAddMode = !id;

  function setContenido(item) {
    setLesson({
      ...lesson,
      contenido: [...lesson.contenido, item],
    });
  }

  function editItem(item) {
    const newItems = lesson.contenido.map((i) => {
      if (i._id === item._id) {
        return item;
      }
      return i;
    });
    setLesson({
      ...lesson,
      contenido: [...newItems],
    });
  }

  function deleteOption(_id) {
    setLesson({
      ...lesson,
      contenido: lesson.contenido.filter((i) => i._id !== _id),
    });
  }

  useEffect(() => {
    if (!isAddMode) {
      dispatch(getLessonById(id)).then((l) => {
        setLesson(readingLessonPutInitialValues(l, module));
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
  });

  function onSubmit(fields, { setStatus, setSubmitting }) {
    const lessonToSave = {
      ...fields,
      contenido: [...lesson.contenido],
    };
    setStatus();
    if (isAddMode) {
      createLesson(lessonToSave, setSubmitting);
    } else {
      updateLesson(id, lessonToSave, setSubmitting);
    }
  }

  function onAddSpace() {
    setLesson({
      ...lesson,
      contenido: [
        ...lesson.contenido,
        { clave: 'ESPACIO', valor: 'Salto de línea', _id: uuidv4() },
      ],
    });
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

  function onResources() {
    setShowResourcesModal(true);
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
            data-icon={LessonTypeIcon.code.icon}
          />
          <span className='ml-4'>
            {' '}
            {isAddMode ? 'Nueva' : 'Editar'} lección tipo código
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
            <div className='flex justify-end mt-10 w-full'>
              <button
                type='button'
                className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
                onClick={onResources}
              >
                <span> Recursos</span>
              </button>
              <ButtonPopperLesson
                onAddOther={() => {
                  setShowNewItemModal(true);
                  setItemEdit(null);
                }}
                onAddSpace={() => onAddSpace()}
              />
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
              {lesson.contenido.length > 0 ? (
                lesson.contenido
                  .sort((a, b) => a.orden - b.orden)
                  .map((item, index) => (
                    <ItemContent
                      item={item}
                      key={item.clave + item.valor + index}
                      setItemEdit={setItemEdit}
                      setShowEditItem={setShowNewItemModal}
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
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
        module={module}
      />
      <AddEditItemContent
        item={itemEdit}
        showModal={showNewItemModal}
        setShowModal={setShowNewItemModal}
        setOpciones={setContenido}
        editOption={editItem}
      />
    </div>
  );
}

export { CreateEditReadingLesson };
