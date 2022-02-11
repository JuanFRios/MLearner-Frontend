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
