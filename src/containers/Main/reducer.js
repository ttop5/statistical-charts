import immutable from 'immutable';

import * as at from 'constants/actionTypes';


const INITIAL_STATE = immutable.fromJS({
  // 提交数
  submitData: {
    allCount: 0,
    day: {
      time: [],
      count: [],
    },
    month: {
      time: [],
      count: [],
    },
    year: {
      time: [],
      count: [],
    },
  },
});

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.SUBMIT_DATA:
      return state.updateIn(['submitData'], () => action.submitData);
    default:
      return state;
  }
}
