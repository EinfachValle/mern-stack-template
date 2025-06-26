import { Fragment, Suspense, lazy, useEffect } from "react";

import { envConstants } from "@/utils/constants/envConstants";
import { CircularProgress } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import AppRoutes from "@/router/AppRoutes";

const SandBox = lazy(() => import("../components/Sandbox"));

const { NODE_ENV } = envConstants;

const StorybookRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("http://localhost:6006/");
  }, [navigate]);

  return <></>;
};

const isDev = NODE_ENV === "development";
console.log("isDev:", isDev);

const GeneralRoutes = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
        <Routes location={location} key={location.pathname}>
          {isDev && <Route path="/storybook" element={<StorybookRoute />} />}
          {isDev && <Route path="/sandbox" element={<SandBox />} />}

          <Route path="/*">
            <Route path="*" element={<AppRoutes />} />
          </Route>

          <Route path="*" element={<Navigate to="/error/404" replace />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default GeneralRoutes;
