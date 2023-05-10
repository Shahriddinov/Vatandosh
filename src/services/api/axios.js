import axios from "axios";
import { portalBaseUrl } from "./utils";
import { getItem } from "../../helpers/persistanceStorage";

axios.defaults.baseURL = portalBaseUrl;

axios.interceptors.request.use(function (config) {
  const token = getItem("token");
  const authorization = token ? `Bearer ${token}` : "";
  const language = getItem("language");

  config.headers.Authorization = authorization;
  config.headers.language = language ? language : "uz";
  return config;
});

export default axios;
