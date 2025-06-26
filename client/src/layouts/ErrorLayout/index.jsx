import { Suspense, memo } from "react";

import { applicationScrollbar } from "@/utils/stylingUtils";
import { Box, CircularProgress, styled } from "@mui/material";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100vh",
  ...applicationScrollbar(theme),
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  overflowY: "auto",
  padding: theme.spacing(0, 6),
}));

const Content = styled(Box)({
  minHeight: "100%",
  height: "100%",
  width: "100%",
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
});

const ErrorLayout = () => {
  const location = useLocation();

  return (
    <Root>
      <Container>
        <Content>
          <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
            <Routes location={location} key={location.pathname}>
              <Route path="404" element={<div>404</div>} />
              <Route path="401" element={<div>401</div>} />
              <Route path="403" element={<div>403</div>} />

              <Route path="*" element={<Navigate to="/error/404" replace />} />
            </Routes>
          </Suspense>
        </Content>
      </Container>
    </Root>
  );
};

export default memo(ErrorLayout);
