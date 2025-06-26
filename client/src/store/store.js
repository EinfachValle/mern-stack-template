import { envConstants } from "@/utils/constants/envConstants";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

import rootReducer from "@/store/reducers";

const { NODE_ENV } = envConstants;

// TODO: Maybe logger does not work
const logger = createLogger({
  duration: false,
  timestamp: false,
  level: "log",
  diff: false,
});

const persistConfig = {
  key: "documents",
  storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    });

    if (NODE_ENV === "development") {
      middleware.push(logger);
    }

    return middleware;
  },
});

const persistor = persistStore(store);

export { store, persistor };
