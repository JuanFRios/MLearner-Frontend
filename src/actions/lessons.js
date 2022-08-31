import { types } from 'types/types';
import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';
import { toast } from 'react-toastify';

export const getLessonsByModule = (idModule) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const respuestaAxios = await mlearnerApi.get(
      `/modulos/${idModule}/lecciones`
    );
    dispatch(finishLoading);
    setTimeout(() => {
      dispatch(setActiveLessons(respuestaAxios.data.contenidoModulo));
    }, 500);
    return respuestaAxios;
  } catch (err) {
    dispatch(finishLoading);
    return null;
  }
};

export const getLessonContent = (idLesson) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const respuestaAxios = await mlearnerApi.get(
      `/lecciones/${idLesson}/contenido`
    );
    dispatch(finishLoading);
    dispatch(setActiveLesson(respuestaAxios.data));
    return respuestaAxios.data;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
    return null;
  }
};

export const validateQuizLesson =
  (idLesson, opcionSeleccionada) => async (dispatch) => {
    try {
      const respuestaAxios = await mlearnerApi.post(
        `/lecciones/${idLesson}/quizLectura/validacion`,
        opcionSeleccionada
      );
      return respuestaAxios.data;
    } catch (err) {
      toast.error(err.response.data.msg, { position: 'top-center' });
      dispatch(finishLoading);
      return null;
    }
  };

export const validateCodeLesson = (idLesson) => async (dispatch) => {
  try {
    const respuestaAxios = await mlearnerApi.post(
      `/lecciones/${idLesson}/codigo/validacion`,
      { esCorrecta: true }
    );
    return respuestaAxios.data;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
    return null;
  }
};

export const setActiveLessons = (lessons) => ({
  type: types.setActiveLessons,
  payload: lessons,
});

export const setActiveLesson = (lesson) => ({
  type: types.setActiveLesson,
  payload: lesson,
});

export const removeActiveLessons = () => ({
  type: types.removeActiveLessons,
});

export const removeActiveLesson = () => ({
  type: types.removeActiveLesson,
});

export const changeSelectedOption = (option) => ({
  type: types.setSelectedOption,
  payload: option,
});

export const resetLessonStatus = () => ({
  type: types.resetLessonStatus,
});

// ADMIN
export const saveLesson = (lesson) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const lessonCreated = await mlearnerApi.post(`lecciones`, lesson);
    dispatch(finishLoading);
    return lessonCreated;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const getLessonById = (idLesson) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const respuestaAxios = await mlearnerApi.get(`/lecciones/${idLesson}`);
    dispatch(finishLoading);
    return respuestaAxios.data;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
    return null;
  }
};
