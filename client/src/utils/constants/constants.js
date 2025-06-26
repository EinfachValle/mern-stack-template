import { envConstants } from "@/utils/constants/envConstants";

const { VITE_API_URL } = envConstants;

export const CONTEXT_PATH = VITE_API_URL || "";
export const MY_URL = `${window.location.origin}${VITE_API_URL}`;
export const FILE_URL = `${MY_URL}/api/document/download/`;
export const AVATAR_URL = `${MY_URL}/api/files/avatar`;

export const DEFAULT_APP_TITLE = "Mern Stack Template";

export const wordFiles = [
  "msword",
  "vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  GREY: "#536886",
  ACCENT_COLOR: "#2b6e4a",
  RED: "#EE3426",
  LIGHT_RED: "#F44336",
  PINK: "#E91E63",
  PURPLE: "#9C27B0",
  DEEP_PURPLE: "#673AB7",
  INDIGO: "#3F51B5",
  LIGHT_BLUE: "#2196F3",
  CYAN: "#00BCD4",
  TEAL: "#009688",
  GREEN: "#37AC28",
  LIGHT_GREEN: "#4CAF50",
  LIME: "#8BC34A",
  AMBER: "#FFC107",
  ORANGE: "#FFAB2E",
  DEEP_ORANGE: "#FF9800",
  SUCCESS: "#4CAF50",
  INFO: "#2196F3",
  ERROR: "#F44336",
  WARNING: "#FFC107",
};

export const LANGUAGES = {
  ENGLISH: {
    isoCode: "en",
    value: "English",
    key: "en",
  },
  GERMAN: {
    isoCode: "de",
    value: "German",
    key: "de-DE",
  },
};
