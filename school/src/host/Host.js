import axios from "axios";
export const url = "http://ews.electronicpoint.uz";

export const httpsRequest = (config) => {
  return axios({
    ...config,
  });
};
