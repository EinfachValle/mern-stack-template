import { combineReducers } from "redux";

import uiReducer from "@/store/reducers/uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
