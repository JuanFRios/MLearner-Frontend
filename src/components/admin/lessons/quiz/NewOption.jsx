import useFormData from 'hooks/useFormData';
import React from 'react';
import Modal from '@material-tailwind/react/Modal';
import ModalHeader from '@material-tailwind/react/ModalHeader';
import ModalBody from '@material-tailwind/react/ModalBody';
import ModalFooter from '@material-tailwind/react/ModalFooter';
import Button from '@material-tailwind/react/Button';
import InputLesson from 'components/utils/InputLesson';
import Select from 'components/utils/Select';

const NewOption = ({ showModal, setShowModal, opciones, setOpciones }) => {
  const { form, formData, updateFormData } = useFormData();
  function onClick() {
    setShowModal(false);
    document.getElementById('myform').reset();
  }

  const onSubmit = async () => {
    setOpciones([...opciones, formData]);
    setShowModal(false);
    document.getElementById('myform').reset();
  };

  return (
    <Modal size='lg' active={showModal} toggler={() => onClick()}>
      <ModalHeader toggler={() => onClick()}>
        <span className='text-3xl mr-52'>Nueva opción</span>
      </ModalHeader>
      <ModalBody>
        <div className='flex'>
          <form
            id='myform'
            ref={form}
            onChange={updateFormData}
            className='w-full h-full mb-6 flex flex-col justify-center items-center'
            onSubmit={onSubmit}
          >
            <InputLesson
              text='Descripción'
              name='opcion'
              type='text'
              accept=''
              required
              placeholder='Ingrese una descripción'
            />
            <Select
              text='Es correcta'
              name='esCorrecta'
              type='checkbox'
              required
              options={[
                { value: null, label: '-' },
                { value: true, label: 'Si' },
                { value: false, label: 'No' },
              ]}
              placeholder='Ingrese una descripción'
            />
          </form>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='blueGray' onClick={() => onClick()} ripple='light'>
          Cerrar
        </Button>
        <Button color='blue' ripple='light' onClick={onSubmit}>
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewOption;
