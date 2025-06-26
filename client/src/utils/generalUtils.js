import { wordFiles } from "./constants/constants";

export const getDisplayFileExtension = (fileExtension) => {
  return "plain" === fileExtension
    ? "txt"
    : wordFiles.some((item) => item === fileExtension)
      ? "docx"
      : fileExtension;
};

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getCookie = (cookieName) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) {
      return part.split(";").shift();
    }
  }
};

export function uuid_v4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
