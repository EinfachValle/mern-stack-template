import { THEME } from "@/utils/constants/constants";

export const applicationScrollbar = (theme) => {
  const isDarkTheme = theme.palette.mode === THEME.DARK;

  return {
    "&::-webkit-scrollbar": {
      width: 4,
      height: 4,
      borderRadius: 4,
    },
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      backgroundColor: isDarkTheme ? "transparent" : "#FAFAFA",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "4px",
      backgroundColor: isDarkTheme ? "#0B89D1" : "#CFD5DE",
      "&:hover": {
        backgroundColor: isDarkTheme ? "#31AFF7" : "transparent",
      },
    },
  };
};
