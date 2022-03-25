import { types } from 'types/types';
import mlearnerApi from 'api/mlearnerApi';
import { startLoading, finishLoading } from 'actions/ui';

export const startLoginEmailPassword = (formData) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const respuestaAxios = await mlearnerApi.post('/auth', formData);
    if (respuestaAxios.data.token) {
      localStorage.setItem('token', respuestaAxios.data.token);
      return await dispatch(renewToken());
    }
  } catch (err) {
    dispatch(finishLoading());
  }
  return false;
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

export const startLogout = () => (dispatch) => {
  dispatch(logout());
  localStorage.removeItem('token');
};

export const login = (user) => ({
  type: types.login,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: types.logout,
});
