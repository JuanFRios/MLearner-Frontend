import { types } from 'types/types';
import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';

export const startLoginEmailPassword = (formData) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const respuestaAxios = await mlearnerApi.post('/auth', formData);
    if (respuestaAxios.data.token) {
      localStorage.setItem('token', respuestaAxios.data.token);
      dispatch(renewToken());
    }
  } catch (err) {
    console.log(err.response.data);
    dispatch(finishLoading);
  }
};

export const renewToken = () => async (dispatch) => {
  try {
    const respuestaAxios = await mlearnerApi.get('/auth/renovarToken');
    dispatch(login(respuestaAxios.data.usuario));
    dispatch(finishLoading());
    return true;
  } catch (err) {
    dispatch(finishLoading());
    return false;
  }
};

export const login = (user) => ({
  type: types.login,
  payload: {
    user,
  },
});
