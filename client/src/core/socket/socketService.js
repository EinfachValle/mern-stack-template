import Logger from "@/core/Logger";
import { socketConf } from "@/core/socket";
import i18n from "i18next";
import { toast } from "sonner";

export const sendMessage = (message) => {
  const jsonMessage = JSON.stringify(message);
  if (message.actionType === "requestDocImage") {
    // display notification about scanned image requested
    toast.success(
      i18n.t(
        "actions.Scanned image requested please wait before requesting again",
      ),
    );
  }
  socketConf.emit(message.id, jsonMessage, (err) => {
    if (err) {
      Logger.error("sendMessage", err, jsonMessage);
    }
  });
};

export const selfActionCheck = (message) => {
  const jsonMessage = JSON.stringify(message);
  return new Promise((resolve) => {
    socketConf.emit(message.id, jsonMessage, (err) => {
      if (err) {
        Logger.error("sendMessage", err, jsonMessage);
        return resolve(false);
      }
      resolve(true);
    });
  });
};

export const sendMessageForResponse = (message) => {
  const jsonMessage = JSON.stringify(message);
  return new Promise((resolve, reject) => {
    socketConf.emit(message.id, jsonMessage, (response) => {
      if (response && response.error) {
        Logger.log(response.error);
        reject(response.error);
      }
      resolve(response);
    });
  });
};
