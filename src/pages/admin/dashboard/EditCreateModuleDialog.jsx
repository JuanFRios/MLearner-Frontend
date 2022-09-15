/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@material-tailwind/react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { editModule } from 'actions/modules';
import LessonInput from 'components/utils/LessonInput';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const EditCreateModuleDialog = ({ module, showModal, setShowModal }) => {
  const isAddMode = !module;
  const dispatch = useDispatch();
  const [option, setOption] = useState({
    nombre: '',
    imagen: null,
    carpetaDestinoRecurso: '',
    tamanoVisualizacion: '',
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
        tamanoVisualizacion: module.tamañoVisualizacion,
      });
      setIsLoading(false);
    } else {
      setOption({
        nombre: '',
        imagen: null,
        carpetaDestinoRecurso: '',
        tamanoVisualizacion: '',
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
    setOption({ ...option, imagen: null });
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
  const updateOption = async (fields) => {
    const resp = await dispatch(editModule(fields, module.mid));
    if (resp.status === 200) {
      toast.success('Módulo actualizado correctamente');
    }
    console.log(fields.imagen);
    window.location.reload();
    console.log('editar', fields);
  };

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
        {({ errors, touched, setFieldValue, resetForm }) => (
          <Form
            className='w-full h-full flex flex-col justify-between items-center pt-6'
            id='myform'
          >
            <Dialog
              open={showModal}
              onClose={() => setShowModal(false)}
              fullWidth
            >
              <DialogTitle>Nuevo Proyecto</DialogTitle>
              <DialogContent>
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
                <div className='w-128 flex flex-col'>
                  <label htmlFor='imagen' className='text-2xl'>
                    Imagen
                  </label>
                  <input
                    id='imagen'
                    name='imagen'
                    type='file'
                    onChange={(event) => {
                      setFieldValue('imagen', event.currentTarget.files[0]);
                    }}
                    className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'
                  />
                </div>
                <div className='w-128'>
                  <span>
                    <b>Imagen actual:</b>{' '}
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
              </DialogContent>
              <DialogActions>
                <Button
                  type='button'
                  color='blueGray'
                  onClick={() => {
                    onClick();
                    resetForm();
                  }}
                  ripple='light'
                >
                  Cerrar
                </Button>
                <Button color='blue' ripple='light' type='submit' form='myform'>
                  Guardar
                </Button>
              </DialogActions>
            </Dialog>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCreateModuleDialog;
