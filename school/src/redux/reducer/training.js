import axios from "axios";
import { url } from "../../host/Host";
import GLOBAL from "../../pages/Token";
export const trainingReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET":
      axios
        .get(`${url}/api/training/${GLOBAL.id}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return state;
        });
    default:
      return state;
  }
};
