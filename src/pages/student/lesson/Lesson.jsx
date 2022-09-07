import {
  getLessonContent,
  validateQuizLesson,
  validateCodeLesson,
} from 'actions/lessons';
import LessonContent from 'components/lesson/LessonContent';
import { ConfirmDialog } from 'components/utils/ConfirmDialog';
import ProgressBar from 'components/lesson/ProgressBar';
import LoadingLesson from 'components/loading/LoadingLesson';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ResultDialog } from 'components/lesson/ResultDialog';
import { getFinalStateModule } from 'actions/modules';

const Lesson = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeLesson, selectedOption } = useSelector(
    (state) => state.lessons
  );
  const [lesson, setLesson] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalErrorResult, setShowModalErrorResult] = useState(false);
  const [showModalSuccessResult, setShowModalSuccessResult] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(async () => {
    setTimeout(async () => {
      const lessonResponse = await dispatch(getLessonContent(id));
      setLesson(lessonResponse);
      setReady(true);
    }, 500);
  }, []);

  function onClick(event) {
    event.preventDefault();
    setShowModal(true);
  }

  async function onContinue(event) {
    event.preventDefault();
    if (
      lesson.leccion.tipo === 'LECTURA' &&
      lesson.leccion.estado !== 'VISTA'
    ) {
      await dispatch(validateQuizLesson(activeLesson.leccion.lid, {}));
    }
    if (lesson.leccion.tipo === 'CODIGO' && lesson.leccion.estado !== 'VISTA') {
      await dispatch(validateCodeLesson(activeLesson.leccion.lid, {}));
    }
    if (activeLesson.idSiguienteLeccion) {
      navigate(`/lesson/${activeLesson.idSiguienteLeccion}`);
      window.location.reload(true);
    } else {
      if (lesson.leccion.estado !== 'VISTA') {
        await dispatch(getFinalStateModule(activeLesson.leccion.modulo._id));
      }
      navigate('/home');
    }
  }

  async function onValidate(event) {
    event.preventDefault();
    const respuesta = await dispatch(
      validateQuizLesson(activeLesson.leccion.lid, {
        idOpcionSeleccionada: selectedOption,
      })
    );
    if (!respuesta.esCorrecta) {
      setShowModalErrorResult(true);
    } else {
      setShowModalSuccessResult(true);
    }
  }

  function onNoClickError() {
    setShowModalErrorResult(false);
    window.location.reload(true);
  }

  function onNoClickSuccess() {
    setShowModalSuccessResult(false);
    navigate(`/lesson/${activeLesson.idSiguienteLeccion}`);
    window.location.reload(true);
  }

  return (
    <>
      {!ready && <LoadingLesson />}
      {ready && (
        <div className='flex flex-col w-190 px-20'>
          <div className='flex items-center my-10'>
            <button
              type='button'
              onClick={onClick}
              className='focus:outline-none hover:scale-110'
            >
              <span
                className='iconify big-icon hover:text-red-500'
                data-icon='ep:close-bold'
              />
            </button>
            {lesson && (
              <p className='text-3xl font-bold ml-9'>
                Modulo: {lesson.leccion.modulo.nombre}
              </p>
            )}
          </div>
          {lesson && (
            <ProgressBar
              seenLessons={lesson.leccion.modulo.numeroLeccionesVistas}
              totalLessons={lesson.leccion.modulo.numeroLecciones}
              puntaje={lesson.leccion.modulo.puntajeAcumulado}
            />
          )}
          <div className='w-full max-h-screen border-2 py-6 pl-6 '>
            {lesson && (
              <LessonContent
                lesson={lesson.leccion}
                lostLives={activeLesson.vidasPerdidas}
              />
            )}
          </div>
          <div className='flex justify-end my-4'>
            {activeLesson &&
              activeLesson.leccion.vidasTotales - activeLesson.vidasPerdidas ===
                0 && (
                <button
                  type='button'
                  className='btn btn-blue hover:scale-110 focus:outline-none'
                  onClick={onContinue}
                >
                  Continuar
                </button>
              )}
            {activeLesson &&
              activeLesson.leccion.vidasTotales - activeLesson.vidasPerdidas >
                0 && (
                <button
                  disabled={!selectedOption}
                  type='button'
                  className='btn bg-green-500 text-white shadow-lg disabled:bg-gray-300 disabled:text-gray-600 hover:scale-110 focus:outline-none'
                  onClick={onValidate}
                >
                  Validar
                </button>
              )}
          </div>
          <ConfirmDialog showModal={showModal} setShowModal={setShowModal} />
          <ResultDialog
            showModal={showModalErrorResult}
            onNoClick={() => onNoClickError()}
            titulo='¡Lo siento!'
            icon='noto:sad-but-relieved-face'
            text='La opción seleccionada es incorrecta.'
            textButton='Entendido'
          />
          <ResultDialog
            showModal={showModalSuccessResult}
            onNoClick={() => onNoClickSuccess()}
            titulo='¡Felicitaciones!'
            icon='noto:party-popper'
            text='La respuesta es correcta.'
            textButton='Continuar'
          />
        </div>
      )}
    </>
  );
};

export default Lesson;
