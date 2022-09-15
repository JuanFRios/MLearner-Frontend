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

const AddEditItemCode = ({
  item,
  showModal,
  setShowModal,
  setOpciones,
  editOption,
}) => {
  const isAddMode = !item;
  const [option, setOption] = useState({
    valor: 'codigo',
    clave: 'CODIGO',
    valorSampleCode: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (!isAddMode) {
      setOption({
        valor: 'Codigo',
        clave: item.clave,
        valorSampleCode: item.valorSampleCode,
      });
      setIsLoading(false);
    } else {
      setOption({ valor: 'codigo', clave: 'CODIGO', valorSampleCode: '' });
    }
    setIsLoading(false);
  }, [item]);

  const validationSchema = Yup.object().shape({
    valor: Yup.string().required('La opcion es requerida'),
    clave: Yup.string().required('Tipo es requerido'),
    valorSampleCode: Yup.string().required('Codigo es requerido'),
  });

  function onClick() {
    document.getElementById('codeItemForm').reset();
    setShowModal(false);
  }
  const onSubmit = (fields) => {
    if (isAddMode) {
      createOption(fields);
    } else {
      updateOption(fields);
    }
    document.getElementById('codeItemForm').reset();
    setShowModal(false);
  };

  function createOption(fields) {
    setOpciones({
      clave: fields.clave,
      valor: fields.valor,
      valorSampleCode: fields.valorSampleCode,
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
            id='codeItemForm'
          >
            <Modal size='lg' active={showModal} toggler={() => onClick()}>
              <ModalHeader toggler={() => onClick()}>
                <span className='ml-4'>
                  {' '}
                  {isAddMode ? 'Nuevo' : 'Editar'} item
                </span>
              </ModalHeader>
              <ModalBody>
                <div className='w-128 flex flex-col'>
                  <span className='text-2xl'>Tipo</span>
                  <span className='appearance-none border-b border-dark_blue_2 w-full py-2 px-3 pl-0 text-gray-700 leading-6 text-xl focus:outline-none focus:shadow-outline bg-transparent'>
                    CODIGO
                  </span>
                </div>
                <LessonInput
                  className='text-sm'
                  name='valorSampleCode'
                  type='text'
                  textarea
                  placeholder='Ingrese una descripción'
                  text='Codigo'
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
                <Button
                  color='blue'
                  ripple='light'
                  type='submit'
                  form='codeItemForm'
                >
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

export default AddEditItemCode;
