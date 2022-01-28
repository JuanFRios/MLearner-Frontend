// import { types } from 'types/types';
import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';

export const login = (formData) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const respuestaAxios = await mlearnerApi.post('/auth', formData);
    dispatch(finishLoading());
    console.log(respuestaAxios);
  } catch (err) {
    console.log(err.response.data);
    dispatch(finishLoading);
  }
};
