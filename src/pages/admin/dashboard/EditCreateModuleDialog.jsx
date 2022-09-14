import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@material-tailwind/react';
import LessonInput from 'components/utils/LessonInput';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const EditCreateModuleDialog = ({ module, showModal, setShowModal }) => {
  const isAddMode = !module;
  const [option, setOption] = useState({
    nombre: '',
    imagen: null,
    carpetaDestinoRecurso: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (!isAddMode) {
      console.log(module);
      setOption({
        nombre: module.nombre,
        carpetaDestinoRecurso: module.carpetaDestinoRecurso,
        imagen: null,
      });
      setIsLoading(false);
    } else {
      setOption({
        nombre: '',
        imagen: null,
        carpetaDestinoRecurso: '',
      });
    }
    setIsLoading(false);
  }, [module]);

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    carpetaDestinoRecurso: Yup.string().required('La carpeta es requerida'),
  });

  function onClick() {
    document.getElementById('myform').reset();
    setShowModal(false);
  }
  const onSubmit = (fields) => {
    if (isAddMode) {
      createOption(fields);
    } else {
      updateOption(fields);
    }
    document.getElementById('myform').reset();
    setShowModal(false);
  };

  function createOption(fields) {
    console.log(fields);
  }
  function updateOption(fields) {
    console.log(fields.imagen);
    console.log('editar', fields);
  }

  if (isLoading) {
    return <div className='private-container'>Cargando...</div>;
  }

  if (!module) {
    return <div />;
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={option}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form
            className='w-full h-full flex flex-col justify-between items-center pt-6'
            id='myform'
          >
            <Modal size='lg' active={showModal} toggler={() => onClick()}>
              <ModalHeader toggler={() => onClick()}>
                <span className='ml-4'>
                  {' '}
                  {isAddMode ? 'Nueva' : 'Editar'} módulo
                </span>
              </ModalHeader>
              <ModalBody>
                <div className='w-128'>
                  <LessonInput
                    name='nombre'
                    type='text'
                    placeholder='Ingrese el nombre'
                    text='Nombre'
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className='w-128'>
                  <LessonInput
                    name='imagen'
                    type='file'
                    placeholder='Ingrese el nombre'
                    text='Imagen de modulo'
                    errors={errors}
                    touched={touched}
                  />
                  <span>
                    <b>Imagen seleccionada:</b>{' '}
                    <a
                      href={module.urlImagen}
                      target='_blank'
                      rel='noreferrer'
                      className='text-sky-600 border-b border-sky-600'
                    >
                      Imagen
                    </a>
                  </span>
                  <br />
                  <span className='text-left text-dark_blue_2 italic pb-6'>
                    {module.tamañoVisualizacion === 'moduleLg'
                      ? 'Por favor suba una imagen de 1012 x 289 para obtener una correcta visualizacion'
                      : 'Por favor suba una imagen de 478 X 444 para obtener una correcta visualizacion'}
                  </span>
                </div>
                <div className='w-128'>
                  <LessonInput
                    name='carpetaDestinoRecurso'
                    type='text'
                    placeholder='Ingrese la carpeta'
                    text='Carpeta destino'
                    errors={errors}
                    touched={touched}
                  />
                  <span className='text-dark_blue_2 italic'>
                    El nombre de la carpeta se debe llamar igual al módulo pero
                    en inglés y usando - en lugar de espacios
                  </span>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type='button'
                  color='blueGray'
                  onClick={() => onClick()}
                  ripple='light'
                >
                  Cerrar
                </Button>
                <Button color='blue' ripple='light' type='submit'>
                  Guardar
                </Button>
              </ModalFooter>
            </Modal>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCreateModuleDialog;
