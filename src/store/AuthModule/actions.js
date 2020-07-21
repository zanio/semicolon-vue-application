import { CLEAR_ERROR } from "./mutation-types";
import { LOGIN } from "../actions.type";
import { SET_AUTH, SET_ERROR, FETCH_START } from "../mutations.type";
import ApiService from "../../common/api.service";
import { timeoutFunction } from "../utility";

/**
 *
 * @param { function } commit
 * @param { string } data
 */
export function setData({ commit }, { data }) {
  commit(SET_DATA, { data });
}

/**
 *  @param {function} commit
 *  @param {Object} payload
 */

export function SetLogin({ commit }, { payload }) {
  return new Promise((resolve, reject) => {
    commit(FETCH_START);
    ApiService.post("auth/login", payload)
      .then(({ data }) => {
        commit(SET_AUTH, data);
        resolve(data);
      })
      .catch(({ response }) => {
        commit(SET_ERROR, response.data.errors);
        timeoutFunction(commit, CLEAR_ERROR);
        reject(response);
      });
  });
}

export function setRegister({ commit }, { payload }) {
  return new Promise((resolve, reject) => {
    commit(FETCH_START);
    ApiService.post("auth/register", payload)
      .then(({ data }) => {
        commit(SET_AUTH, data);
        resolve(data);
      })
      .catch((error) => {
        commit(SET_ERROR, error);
        reject(error);
        timeoutFunction(commit, CLEAR_ERROR);
      });
  });
}
