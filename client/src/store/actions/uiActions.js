import * as TYPES from "@/store/types";

export const setDocumentDraggedOver = (status) => (dispatch) => {
  dispatch({
    type: TYPES.SET_DOCUMENT_DRAGGED_OVER,
    payload: status,
  });
};

export const setApplicationTouched = () => (dispatch) => {
  dispatch({
    type: TYPES.SET_APP_TOUCHED,
    payload: true,
  });
};

export const changeApplicationTheme = (theme) => (dispatch) => {
  dispatch({
    type: TYPES.CHANGE_APPLICATION_THEME,
    payload: theme,
  });
};

export const changeApplicationLocale = (locale) => (dispatch) => {
  dispatch({
    type: TYPES.CHANGE_APPLICATION_LOCALE,
    payload: locale,
  });
};
