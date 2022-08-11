/* eslint-disable no-console */
import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';
import { toast } from 'react-toastify';

// STUDENT
export const getContentModule = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const modules = await mlearnerApi.get(`curso/contenido`);
    dispatch(finishLoading);
    return modules;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const getFinalStateModule = (idModule) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const finalState = await mlearnerApi.get(`modulos/${idModule}/estadoFinal`);
    dispatch(finishLoading);
    return finalState.data;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const resetModule = (idModule) => async (dispatch) => {
  dispatch(startLoading());
  try {
    await mlearnerApi.post(`modulos/${idModule}/reset`);
    dispatch(finishLoading);
    return true;
  } catch (err) {
    toast.error(err.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

// ADMIN
export const getModules = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const modules = await mlearnerApi.get('modulos');
    dispatch(finishLoading);
    return modules.data.modulos;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const getScoreModule = (idModule) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const scores = await mlearnerApi.get(`modulos/${idModule}/puntaje`);
    dispatch(finishLoading);
    return scores.data;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const getresourcesByModule = (idModule) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const resources = await mlearnerApi.get(
      `curso/modulos/${idModule}/recursos`
    );
    dispatch(finishLoading);
    return resources.data.recursos;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const saveModule = (module) => async (dispatch) => {
  dispatch(startLoading());
  const bodyFormData = new FormData();
  bodyFormData.append('nombre', module.nombre);
  bodyFormData.append('carpetaDestinoRecurso', module.carpetaDestinoRecurso);
  bodyFormData.append('imagen', module.imagen);
  bodyFormData.append('tamanoVisualizacion', module.tamanoVisualizacion);
  try {
    const moduleCreated = await mlearnerApi.post(`modulos`, bodyFormData);
    dispatch(finishLoading);
    return moduleCreated;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const saveResourceModule = (idModule, resource) => async (dispatch) => {
  dispatch(startLoading());
  const bodyFormData = new FormData();
  bodyFormData.append('recurso', resource.resource);
  try {
    const resourceCreated = await mlearnerApi.post(
      `curso/modulos/${idModule}/recursos`,
      bodyFormData
    );
    dispatch(finishLoading);
    return resourceCreated;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const getLessonsByModule = (idModule) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const lessons = await mlearnerApi.get(
      `modulos/admin/${idModule}/lecciones?page=0&pageSize=50`
    );
    dispatch(finishLoading);
    return lessons.data;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};
