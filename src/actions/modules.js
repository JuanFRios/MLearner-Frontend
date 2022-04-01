/* eslint-disable no-console */
import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';
import { toast } from 'react-toastify';

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
