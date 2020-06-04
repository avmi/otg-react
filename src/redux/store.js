import {combineReducers, createStore} from 'redux';
import {canvasReducer} from './canvasReducer';
import {widgetsReducer} from './widgetsReducer';

export const store = createStore(combineReducers({
  canvas: canvasReducer,
  widgets: widgetsReducer,
}));
