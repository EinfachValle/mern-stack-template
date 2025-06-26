import { CONTEXT_PATH } from "@/utils/constants/constants";
import Axios from "axios";

const CancelToken = Axios.CancelToken;

// Create Axios instance with base configuration
const http = Axios.create({
  baseURL: CONTEXT_PATH,
  withCredentials: true,
  cancelToken: CancelToken.source().token,
});

export { CancelToken };
export default http;
