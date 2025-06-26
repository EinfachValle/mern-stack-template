import { Fragment, useEffect } from "react";

import GeneralRoutes from "@/router/GeneralRoutes";
import { THEME } from "@/utils/constants/constants";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

import "./App.css";
import * as AppInitializerService from "@/core/client/AppInitializer";

import getTheme from "./theme";

const App = () => {
  const currentTheme = useSelector((state) => state.ui.theme);

  const localStorageTheme = localStorage.getItem("theme");

  useEffect(() => {
    AppInitializerService.trapApplicationTouched();
  }, []);

  const mode = currentTheme || localStorageTheme || THEME.LIGHT;
  const theme = getTheme(mode);

  return (
    <Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster
            position="top-right"
            richColors
            theme="dark"
            duration={4000}
            expand
            toastOptions={{
              style: {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "1px solid #333638",
                borderRadius: "8px",
                color: "#F4F6F8",
              },
            }}
          />
          <div className="App" id="App">
            <GeneralRoutes />
          </div>
        </ThemeProvider>
      </Router>
    </Fragment>
  );
};

export default App;
