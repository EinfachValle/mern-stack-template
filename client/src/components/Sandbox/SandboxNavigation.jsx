import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Box, styled } from "@mui/material";

const Root = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  maxHeight: "60px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: theme.spacing(1),
  overflowX: "hidden",
  backgroundColor: theme.palette.surface.interface.background,
  color: theme.palette.icon.secondary,
}));

// import { ThemeSwitcher } from "./ThemeSwitcher";

export const SandBoxNavigation = ({ ...otherProps }) => {
  return (
    <Root {...otherProps}>
      <Brightness4Icon />
    </Root>
  );
};
