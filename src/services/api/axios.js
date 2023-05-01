import axios from "axios";
import { portalBaseUrl } from "./utils";
import { getItem } from "../../helpers/persistanceStorage";

axios.defaults.baseURL = portalBaseUrl;

axios.interceptors.request.use(function (config) {
  const token = getItem("token");
  const authorization = token ? `Bearer ${token}` : "";

  config.headers.Authorization = authorization;
  return config;
});

export default axios;
