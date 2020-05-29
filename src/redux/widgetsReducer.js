import * as EventTypes from "./eventTypes";

const initialState = {
  1: {
    id: 1,
    type: 'text',
    properties: {
      value: 'Hello from Widget 1',
    },
    x: 10,
    y: 30,
    width: 100,
    height: 50,
  },

  2: {
    id: 2,
    type: 'text',
    properties: {
      value: 'The London is the capital of Great Britain',
    },
    x: 350,
    y: 200,
    width: 200,
    height: 350,
  },

  3: {
    id: 3,
    type: 'progress',
    properties: {
      progress: 50,
    },
    x: 250,
    y: 100,
    width: 200,
    height: 50,
  },
};

export function widgetsReducer(state = initialState, action) {
  switch (action.type) {
    case EventTypes.WIDGET_POSITION_CHANGE:
      return {
        ...state,
        [action.data.id]: {
          ...state[action.data.id],
          x: action.data.x,
          y: action.data.y,
        }
      }

    case EventTypes.WIDGET_SIZE_CHANGE:
      return {
        ...state,
        [action.data.id]: {
          ...state[action.data.id],
          width: action.data.width,
          height: action.data.height,
        }
      }

    default:
      return state;
  }
}
