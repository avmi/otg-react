import * as EventTypes from "./eventTypes";

const initialState = {
  selectedWidget: null,
  activePopup: null,
  documents: {
    list: [],
    error: null,
    loading: false,
  },
};

export function canvasReducer(state = initialState, action) {
  switch (action.type) {
    case EventTypes.CANVAS_SELECT_WIDGET:
      // TODO: Implement logic for "selecting" widget
      return {
        ...state,
      }

    case EventTypes.CANVAS_HIDE_POPUP:
      return {
        ...state,
        activePopup: null,
      }

    case EventTypes.CANVAS_OPEN_DOCUMENT:
      // TODO: Implement logic for showing "Open document" popup
      return {
        ...state,
        activePopup: 'OPEN',
      }

    case EventTypes.CANVAS_OPEN_DOCUMENT_INIT:
      // TODO: Implement logic for showing "Open document" popup
      return {
        ...state,
        document: {
          ...state.documents,
          error: null,
          loading: true,
        },
      }

    case EventTypes.CANVAS_OPEN_DOCUMENT_SUCCESS:
      // TODO: Implement logic for showing "Open document" popup
      return {
        ...state,
        documents: {
          list: action.data,
          error: null,
          loading: false,
        },
      }

    case EventTypes.CANVAS_OPEN_DOCUMENT_FAIL:
      // TODO: Implement logic for showing "Open document" popup
      return {
        ...state,
        documents: {
          ...state.documents,
          error: action.error,
          loading: false,
        },
      }

    case EventTypes.CANVAS_SAVE_DOCUMENT:
      // TODO: Implement logic for showing "Save document" popup which asks for document name
      return {
        ...state,
        activePopup: 'SAVE',
      }

    default:
      return state;
  }
}
