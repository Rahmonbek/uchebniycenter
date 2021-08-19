import axios from "axios";
import GLOBAL from "../pages/Token";
export const url = "https://ews-backend.herokuapp.com";
export const idT = GLOBAL.id;

export const httpsRequest = (config) => {
  return axios({
    ...config,
  });
};
