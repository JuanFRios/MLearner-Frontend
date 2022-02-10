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
    toast.error(err.response.data.msg, { position: 'top-center' });
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
    console.log(respuestaAxios);
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

export const removeActiveLessons = () => ({
  type: types.removeActiveLessons,
});
