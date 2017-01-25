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
