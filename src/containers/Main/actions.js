import fetch from 'isomorphic-fetch';

import * as at from 'constants/actionTypes';
import { httpGetRequest, getUrl } from 'utils/commons';


// 提交数
export function receiveSubmitData(submitData) {
  return {
    submitData,
    type: at.SUBMIT_DATA,
  };
}

export function fetchSubmitData() {
  const api = 'api/submit';
  return (dispatch) => {
    fetch(getUrl(api), httpGetRequest())
    .then(response => response.json())
    .then(json => dispatch(receiveSubmitData(json)));
  };
}

// 提交语言
export function receiveLanguageData(languageData) {
  return {
    languageData,
    type: at.LANGUAGE_DATA,
  };
}

export function fetchLanguageData() {
  const api = 'api/langaue';
  return (dispatch) => {
    fetch(getUrl(api), httpGetRequest())
    .then(response => response.json())
    .then(json => dispatch(receiveLanguageData(json)));
  };
}

// 题目数
export function receiveProblemData(problemData) {
  return {
    problemData,
    type: at.PROBLEM_DATA,
  };
}

export function fetchProblemData() {
  const api = 'api/problem';
  return (dispatch) => {
    fetch(getUrl(api), httpGetRequest())
    .then(response => response.json())
    .then(json => dispatch(receiveProblemData(json)));
  };
}

// 用户分布
export function receiveUserData(userData) {
  return {
    userData,
    type: at.USER_DATA,
  };
}

export function fetchUserData() {
  const api = 'api/user';
  return (dispatch) => {
    fetch(getUrl(api), httpGetRequest())
    .then(response => response.json())
    .then(json => dispatch(receiveUserData(json)));
  };
}
