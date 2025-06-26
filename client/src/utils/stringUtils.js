export const capitalizeFirstLetter = (s) => {
  if (typeof s !== "string") return "";

  const lowerCased = s.toLowerCase();

  return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
};

export const toInitUpperCase = (s) => {
  if (typeof s !== "string") return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const isUrl = (string) =>
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g.test(
    string,
  );

export const isLink = (string) =>
  string.replace(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
    (match) =>
      `<a href="${match}" target="_blank" rel="noreferrer noopener">` +
      match +
      `</a>`,
  );

export const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export function formatBytes(bytes, decimals = 2) {
  if (typeof bytes !== "number") bytes = parseInt(bytes);

  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
