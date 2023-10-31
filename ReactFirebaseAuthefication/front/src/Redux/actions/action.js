import axios from "axios";
import { LOGOUT_USER, SET_USER } from "../actions_types";

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

/* export function getCountries() {
  return async function (dispatch) {
    try {
      //aca sew conecta el front con el back
      const info = await axios.get(`${URL_COUNTRIES}`);
      return dispatch({
        type: "GET_COUNTRIES",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
} */
