import { SandBoxNavigation } from "@/components/Sandbox/SandboxNavigation";
import { Box, styled } from "@mui/material";

// import the component what do you want to test below:

const Root = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: 0,
  padding: 0,
  overflowX: "hidden",
  backgroundColor: theme.palette.surface.interface.background,
  color: theme.palette.text.default,
}));

const SandBox = ({ ...otherProps }) => {
  return (
    <Box {...otherProps}>
      <SandBoxNavigation />
      <Root>SandBox</Root>
    </Box>
  );
};

export default SandBox;
