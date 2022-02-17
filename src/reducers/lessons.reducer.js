import { types } from 'types/types';

const initialState = {
  activeLessons: null,
  activeLesson: null,
  selectedOption: null,
};

// eslint-disable-next-line default-param-last
export const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveLessons:
      return {
        ...state,
        activeLessons: action.payload,
      };

    case types.setActiveLesson:
      return {
        ...state,
        activeLesson: action.payload,
      };

    case types.setSelectedOption:
      return {
        ...state,
        selectedOption: action.payload,
      };

    case types.removeActiveLessons:
      return {
        ...state,
        activeLessons: null,
      };

    case types.removeActiveLesson:
      return {
        ...state,
        activeLesson: null,
      };

    case types.removeSelectedOption:
      return {
        ...state,
        selectedOption: null,
      };

    case types.resetLessonStatus:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
