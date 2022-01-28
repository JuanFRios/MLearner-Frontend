import { types } from 'types/types';

// eslint-disable-next-line default-param-last
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        user: action.payload.user,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
