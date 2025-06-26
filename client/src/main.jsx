import React, { StrictMode } from "react";

import i18n from "@/core/i18n";
import { store } from "@/store/store";
import { envConstants } from "@/utils/constants/envConstants";
import { StyledEngineProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import App from "./App.jsx";

import * as serviceWorker from "@/core/client/serviceWorker";

import "./index.css";

const { NODE_ENV } = envConstants;

if (NODE_ENV !== "production") {
  localStorage.setItem("debug", "mern-stack-template:*");
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root-Element not found. Please check your index.html file.");
}
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(Logger.log);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
