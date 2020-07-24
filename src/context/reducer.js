import {
  FETCH_DATA,
  OPEN_DRAWER,
  TRANSITION_MODE,
  TRANSITION_LANGUAGE,
} from './types';

export const initialState = {
  chapters: [],
  isDrawerOpen: false,
  isTransition: true,
  transitionLanguage: 'english',
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isDrawerOpen: action.drawer };
    case TRANSITION_MODE:
      return { ...state, isTransition: action.toggleTransition };
    case TRANSITION_LANGUAGE:
      return { ...state, transitionLanguage: action.selectTransitionLanguage };
    case FETCH_DATA:
      return { ...state, chapters: action.chapters };
    default:
      return state;
  }
};
