import * as EventTypes from "./eventTypes";

const initialState = {
  1: {
    id: 1,
    type: 'text',
    properties: {
      value: 'Hello from Widget 1',
      bold: true,
      italic: false,
      fontSize: 24,
      alignment: 'center',
    },
    x: 10,
    y: 30,
    width: 200,
    height: 100,
  },

  2: {
    id: 2,
    type: 'text',
    properties: {
      value: 'The London is the capital of Great Britain',
      bold: false,
      italic: true,
      fontSize: 12,
      alignment: 'left',
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
      progress: 30,
    },
    x: 250,
    y: 100,
    width: 200,
    height: 50,
  },
};

export function widgetsReducer(state = initialState, action) {
  switch (action.type) {
    case EventTypes.WIDGET_ADD:
      // TODO: Implement logic for adding widgets
      return {
        ...state,
      }

    case EventTypes.WIDGET_REMOVE:
      // TODO: Implement logic for removing widgets
      return {
        ...state,
      }

    case EventTypes.WIDGET_MOVE_UP:
      // TODO: Implement logic for move widget z-index up
      return {
        ...state,
      }

    case EventTypes.WIDGET_MOVE_DOWN:
      // TODO: Implement logic for move widget z-index down
      return {
        ...state,
      }

    case EventTypes.WIDGET_SET_PROPERTIES:
      // TODO: Implement logic for setting widget properties
      return {
        ...state,
      }

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
