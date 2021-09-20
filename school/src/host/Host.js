import axios from "axios";
export const url = "http://ews.electronicpoint.uz";
// https://ews-backend.herokuapp.com
export const httpsRequest = (config) => {
  return axios({
    ...config,
  });
};

 
