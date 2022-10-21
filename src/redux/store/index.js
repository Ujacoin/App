import {combineReducers, createStore} from 'redux';
import {LoginReducer} from '../reducer/LoginReducer';

const rootReducer = combineReducers({LoginReducer});

export const store = createStore(rootReducer);
