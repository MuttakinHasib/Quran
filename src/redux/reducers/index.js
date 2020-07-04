import { combineReducers } from 'redux';
import chaptersReducer from './chaptersReducer';

export default combineReducers({ chapters: chaptersReducer });
