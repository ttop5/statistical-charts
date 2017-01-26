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

  // 提交语言
  languageData: [],

  // 题目数据
  problemData: {
    allCount: 0,
    levelBarData: {
      problemId: [],
      commitCount: [],
    },
    verticalBarData: {
      problemId: [],
      commitCount: [],
    },
  },

  // 用户分布
  userData: {
    major: [],
    school: [],
    college: [],
  },
});

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.SUBMIT_DATA:
      return state.updateIn(['submitData'], () => action.submitData);
    case at.LANGUAGE_DATA:
      return state.updateIn(['languageData'], () => action.languageData);
    case at.PROBLEM_DATA:
      return state.updateIn(['problemData'], () => action.problemData);
    case at.USER_DATA:
      return state.updateIn(['userData'], () => action.userData);
    default:
      return state;
  }
}
