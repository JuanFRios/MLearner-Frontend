/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LessonTypeIcon } from 'constants/Lesson';
import useFormData from 'hooks/useFormData';
import InputLesson from 'components/utils/InputLesson';
import ButtonPopperLesson from 'components/utils/ButtonPopperLesson';
import ResourcesModal from 'components/admin/modules/ResourcesModal';
import AddItem from 'components/admin/lessons/reading/AddItem';
import ItemContent from 'components/admin/lessons/reading/ItemContent';
import { toast } from 'react-toastify';
import { validateReadingLesson } from 'utils/validators';
import { useDispatch } from 'react-redux';
import { saveLesson } from 'actions/lessons';
import { v4 as uuidv4 } from 'uuid';

const CreateReadingLesson = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [valid, setValid] = useState(false);
  const { module } = useParams();
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showNewItemModal, setShowNewItemModal] = useState(false);
  const [lesson, setLesson] = useState({});
  const [contenido, setContenido] = useState([]);
  const { form, formData, updateFormData } = useFormData();
  function onBack() {
    navigate(`/admin/course/module/${module}`);
  }

  const onPreview = () => {
    window.open('/preview/lesson', '_blank');
  };

  function onAddSpace() {
    setContenido([
      ...contenido,
      { clave: 'ESPACIO', valor: 'Salto de línea', _id: uuidv4() },
    ]);
  }

  useEffect(() => {
    const readingLesson = {
      ...lesson,
      vidasTotales: formData.vidasTotales,
      puntaje: formData.puntaje,
      titulo: formData.titulo,
      contenido: [...contenido],
      tipo: 'LECTURA',
      modulo: module,
    };
    setLesson({ ...readingLesson });
    const validation = validateReadingLesson(readingLesson);
    setValid(!validation.isError);
    if (valid) {
      localStorage.setItem(
        'lessonPreview',
        JSON.stringify(validation.readLessonCast)
      );
    }
  }, [contenido, formData]);

  const onSave = async () => {
    const { isError, errors, readLessonCast } = validateReadingLesson(lesson);
    if (isError) {
      toast.error(errors[0], {
        position: 'top-center',
      });
    } else {
      const lessonToCreate = {
        ...readLessonCast,
        contenido: readLessonCast.contenido.map((item) => ({
          clave: item.clave,
          valor: item.valor,
        })),
      };
      const lessonCreated = await dispatch(saveLesson(lessonToCreate));
      if (lessonCreated) {
        toast.success('Lección creada correctamente', {
          position: 'top-center',
        });
      }
      navigate(`/admin/course/module/${module}`);
    }
  };

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
            data-icon={LessonTypeIcon.reading.icon}
          />
          <span className='ml-4'>Nueva lección tipo lectura</span>
        </div>
      </div>
      <form
        ref={form}
        onChange={updateFormData}
        className='w-full h-full flex justify-between items-center pt-6'
      >
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
      </form>
      <div className='flex justify-end mt-10'>
        <button
          type='button'
          className='btn btn-blue hover:scale-110 focus:outline-none flex justify-center items-center mx-2'
          onClick={onResources}
        >
          <span> Recursos</span>
        </button>
        <ButtonPopperLesson
          onAddOther={() => setShowNewItemModal(true)}
          onAddSpace={() => onAddSpace()}
        />
        <button
          type='button'
          disabled={!valid}
          className={`btn bg-light_green_2 text-white opacity-100 hover:scale-110 focus:outline-none flex justify-center items-center mx-2 ${
            !valid ? 'opacity-50 ' : ''
          }`}
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
        {contenido.length > 0 ? (
          contenido.map((item, index) => (
            <ItemContent
              item={item}
              key={item.clave + item.valor + index}
              contenido={contenido}
              setContenido={setContenido}
            />
          ))
        ) : (
          <p className='w-full text-center text-slate-400 mt-4'>
            **Aún no se han creado opciones para el enunciado**
          </p>
        )}
      </div>
      <ResourcesModal
        showModal={showResourcesModal}
        setShowModal={setShowResourcesModal}
        module={module}
      />
      <AddItem
        showModal={showNewItemModal}
        setShowModal={setShowNewItemModal}
        contenido={contenido}
        setContenido={setContenido}
        module={module}
      />
    </div>
  );
};

export default CreateReadingLesson;
