import { Suspense } from "react";

import ErrorLayout from "@/layouts/ErrorLayout";
import { CircularProgress } from "@mui/material";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AppLayout from "@/layouts/AppLayout";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<AppLayout />} />

        <Route path="/error/*" element={<ErrorLayout />} />

        <Route path="*" element={<Navigate to="/error/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
