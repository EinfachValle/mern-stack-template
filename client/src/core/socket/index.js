import envConstants from "@/utils/constants/envConstants";
import socketIOClient from "socket.io-client";

const { NODE_ENV, VITE_PUBLIC_URL, VITE_APP_PORT } = envConstants;

export const appSocket = (query) => {
  const socket =
    NODE_ENV === "production"
      ? socketIOClient(`https://${window.location.hostname}/application`, {
          path: `${VITE_PUBLIC_URL}/socket.io`,
          query,
        })
      : socketIOClient(
          `https://${window.location.hostname}:${VITE_PUBLIC_URL}/application`,
          {
            path: `${VITE_PUBLIC_URL}/socket.io`,
            query,
          },
        );
  return socket;
};

export const socketConf =
  NODE_ENV === "production"
    ? socketIOClient(`https://${window.location.hostname}/conference`, {
        path: `${VITE_PUBLIC_URL}/socket.io`,
      })
    : socketIOClient(
        `https://${window.location.hostname}:${VITE_APP_PORT}/conference`,
      );
