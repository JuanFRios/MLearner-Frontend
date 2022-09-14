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

const AddEditOption = ({
  item,
  showModal,
  setShowModal,
  setOpciones,
  editOption,
}) => {
  const isAddMode = !item;
  const [option, setOption] = useState({ opcion: '', esCorrecta: false });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    if (!isAddMode) {
      setOption({ opcion: item.opcion, esCorrecta: item.esCorrecta });
      setIsLoading(false);
    } else {
      setOption({ opcion: '', esCorrecta: false });
    }
    setIsLoading(false);
  }, [item]);

  const validationSchema = Yup.object().shape({
    opcion: Yup.string().required('La opcion es requerida'),
    esCorrecta: Yup.boolean().required('Es correcta es requerido'),
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
      opcion: fields.opcion,
      esCorrecta: fields.esCorrecta,
      _id: uuidv4(),
    });
  }
  function updateOption(fields) {
    editOption({
      ...fields,
      esCorrecta: fields.esCorrecta === 'true',
      _id: item._id,
    });
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
                  {isAddMode ? 'Nueva' : 'Editar'} opción
                </span>
              </ModalHeader>
              <ModalBody>
                <div className='w-128'>
                  <LessonInput
                    name='opcion'
                    type='text'
                    placeholder='Ingrese una descripción'
                    text='Opción'
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <LessonInput
                  name='esCorrecta'
                  select
                  options={[
                    { value: true, text: 'Si' },
                    { value: false, text: 'No' },
                  ]}
                  placeholder='Ingrese una descripción'
                  text='Es correcta'
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

export default AddEditOption;
