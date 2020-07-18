import { FETCH_DATA } from './types';

export const initialState = {
  chapters: [],
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return { chapters: action.chapters };
    default:
      return state;
  }
};
