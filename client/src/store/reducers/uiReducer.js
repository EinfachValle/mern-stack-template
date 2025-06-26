import * as TYPES from "@/store/types";
import { LANGUAGES, THEME } from "@/utils/constants/constants";

const initialUIState = {
  documnetDraggedOver: false,
  appTouched: false,
  theme: THEME.LIGHT,
  locale: LANGUAGES.ENGLISH.key,
  loading: false,
  error: null,
};

const uiReducer = (state = initialUIState, action) => {
  switch (action.type) {
    case TYPES.SET_DOCUMENT_DRAGGED_OVER:
      return {
        ...state,
        documnetDraggedOver: action.payload,
      };
    case TYPES.SET_APP_TOUCHED:
      return {
        ...state,
        appTouched: action.payload,
      };
    case TYPES.CHANGE_APPLICATION_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case TYPES.CHANGE_APPLICATION_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
