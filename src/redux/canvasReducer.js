import * as EventTypes from "./eventTypes";

const initialState = {
  selectedWidget: null,
};

export function canvasReducer(state = initialState, action) {
  switch (action.type) {
    case EventTypes.CANVAS_SELECT_WIDGET:
      // TODO: Implement logic for "selecting" widget
      return {
        ...state,
      }

    case EventTypes.CANVAS_OPEN_DOCUMENT:
      // TODO: Implement logic for showing "Open document" popup
      return {
        ...state,
      }

    case EventTypes.CANVAS_SAVE_DOCUMENT:
      // TODO: Implement logic for showing "Save document" popup which asks for document name
      return {
        ...state,
      }

    default:
      return state;
  }
}
