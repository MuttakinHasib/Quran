import {
  FETCH_DATA,
  OPEN_DRAWER,
  TRANSITION_MODE,
  TRANSITION_LANGUAGE,
  ARABIC_FONT_SIZE,
  ENGLISH_FONT_SIZE,
  BANGLA_FONT_SIZE,
  SELECT_BANGLA_TRANSITION,
} from './types';
import { getLocalStorageData } from '../utils/getLocalStorageData';

const transitionMode = getLocalStorageData('transitionMode');
const transitionLanguage = getLocalStorageData('transitionLanguage');
const selectedTransition = getLocalStorageData('selectedTransition');
const arabicFontSize = getLocalStorageData('arabicFontSize');
const englishFontSize = getLocalStorageData('englishFontSize');
const banglaFontSize = getLocalStorageData('banglaFontSize');
console.log(transitionMode, transitionLanguage,arabicFontSize);
export const initialState = {
  chapters: [],
  isDrawerOpen: false,
  isTransition: transitionMode === null ? true : transitionMode,
  transitionLanguage:
    transitionLanguage === null ? 'bangla' : transitionLanguage,
  arabicFontSize: !arabicFontSize ? 55 : arabicFontSize,
  englishFontSize: !englishFontSize ? 25 : englishFontSize,
  banglaFontSize: !banglaFontSize ? 30 : banglaFontSize,
  selectedTransition:
    selectedTransition === null ? 'taisirul_quran' : selectedTransition,
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isDrawerOpen: action.drawer };

    case TRANSITION_MODE:
      return {
        ...state,
        isTransition: action.toggleTransition,
      };

    case TRANSITION_LANGUAGE:
      return { ...state, transitionLanguage: action.selectTransitionLanguage };

    case SELECT_BANGLA_TRANSITION:
      return { ...state, selectedTransition: action.transition };

    case ARABIC_FONT_SIZE:
      return { ...state, arabicFontSize: action.fontSize };

    case ENGLISH_FONT_SIZE:
      return { ...state, englishFontSize: action.fontSize };

    case BANGLA_FONT_SIZE:
      return { ...state, banglaFontSize: action.fontSize };

    case FETCH_DATA:
      return { ...state, chapters: action.chapters };

    default:
      return state;
  }
};
