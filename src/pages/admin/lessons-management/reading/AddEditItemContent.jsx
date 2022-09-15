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
import { v4 as uuidv4 } from 'uuid';

const AddEditItemContent = ({
  item,
  showModal,
  setShowModal,
  setOpciones,
  editOption,
}) => {
  const isAddMode = !item;
  const [option, setOption] = useState({ valor: '', clave: '' });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (!isAddMode) {
      setOption({ valor: item.valor, clave: item.clave });
      setIsLoading(false);
    } else {
      setOption({ valor: '', clave: '' });
    }
    setIsLoading(false);
  }, [item]);

  const validationSchema = Yup.object().shape({
    valor: Yup.string().required('La opcion es requerida'),
    clave: Yup.string().required('Tipo es requerido'),
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
    setOpciones({
      clave: fields.clave,
      valor: fields.valor,
      _id: uuidv4(),
    });
  }
  function updateOption(fields) {
    editOption({ ...fields, _id: item._id });
  }

  if (isLoading) {
    return <div className='private-container'>Cargando...</div>;
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
                  {isAddMode ? 'Nuevo' : 'Editar'} item
                </span>
              </ModalHeader>
              <ModalBody>
                <div className='w-128'>
                  <LessonInput
                    name='clave'
                    select
                    options={[
                      { value: null, text: '-' },
                      { value: 'TITULO', text: 'Titulo' },
                      { value: 'SUBTITULO', text: 'Subtitulo' },
                      { value: 'TEXTO', text: 'Texto' },
                      { value: 'IMAGEN', text: 'Imagen' },
                      { value: 'LISTA', text: 'Lista' },
                      { value: 'LINK', text: 'Link' },
                      {
                        value: 'TEXTO-CODIGO',
                        text: 'Texto en formato código',
                      },
                    ]}
                    placeholder='Ingrese una opcion'
                    text='Tipo'
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <LessonInput
                  name='valor'
                  type='text'
                  textarea
                  placeholder='Ingrese un valor'
                  text='Valor'
                  errors={errors}
                  touched={touched}
                />
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

export default AddEditItemContent;
