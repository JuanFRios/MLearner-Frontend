import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';
import { toast } from 'react-toastify';

export const getStatistics = (typeStatistics) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const top = await mlearnerApi.get(
      `curso/estadisticas/top/${typeStatistics}`
    );
    dispatch(finishLoading);
    return top.data.top;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};

export const getRacha = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const racha = await mlearnerApi.get('curso/estadisticas/diasEstudio');
    dispatch(finishLoading);
    return racha.data.dias;
  } catch (err) {
    toast.error(err.response.data.msg, { position: 'top-center' });
    dispatch(finishLoading);
  }
  return false;
};
