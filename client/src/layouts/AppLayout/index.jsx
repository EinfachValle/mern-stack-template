import { Fragment, Suspense, memo } from "react";

import { applicationScrollbar } from "@/utils/stylingUtils";
import { Box, CircularProgress, Typography, styled } from "@mui/material";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Root = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  minHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  gap: theme.spacing(1),
  background: theme.palette.background.default,
  zIndex: 999,
  ...applicationScrollbar(theme),
}));

const ContentContainer = styled(Box)({
  marginTop: "72px",
  position: "relative",
});

const Content = styled(Box)({
  zIndex: 2,
  flex: 1,
  minHeight: "100vh",
});

const AppLayout = () => {
  const location = useLocation();

  return (
    <Root>
      <nav>Navigation</nav>
      <ContentContainer>
        <Typography>Space for extra content like a header or banner</Typography>
        <Content>
          <Suspense fallback={<CircularProgress style={{ margin: "auto" }} />}>
            <Routes location={location} key={location.pathname}>
              <Route index element={<div>Index - App</div>} />
              <Route path="modules" element={<div>modules</div>} />
              <Route path="docs" element={<div>docs</div>} />
              <Route path="contact" element={<div>contact</div>} />

              <Route path="*" element={<Navigate to="/error/404" replace />} />
            </Routes>
          </Suspense>
        </Content>
      </ContentContainer>
      <footer>Footer</footer>
    </Root>
  );
};

export default memo(AppLayout);
