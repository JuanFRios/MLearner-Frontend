import { types } from 'types/types';

const initialState = {
  activeLessons: null,
};

// eslint-disable-next-line default-param-last
export const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveLessons:
      return {
        ...state,
        activeLessons: action.payload,
      };

    case types.removeActiveLessons:
      return {
        ...state,
        activeLessons: null,
      };

    default:
      return state;
  }
};
