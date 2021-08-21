import axios from "axios";
export const url = "https://ews-backend.herokuapp.com";

export const httpsRequest = (config) => {
  return axios({
    ...config,
  });
};


