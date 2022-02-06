import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';
import { toast } from 'react-toastify';

export const getContentModule = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    await mlearnerApi.get(`curso/contenido`);
    dispatch(finishLoading);
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};
