import * as data from '../mockData/charts';


// 提交量
export const submit = {
  method: 'Get',
  path: '/api/submit',
  config: {
    handler(request, reply) {
      return reply(data.submitData);
    },
  },
};

// 提交语言
export const language = {
  method: 'Get',
  path: '/api/language',
  config: {
    handler(request, reply) {
      return reply(data.languageData);
    },
  },
};

// 题目数
export const problem = {
  method: 'Get',
  path: '/api/problem',
  config: {
    handler(request, reply) {
      return reply(data.problemData);
    },
  },
};

// 用户分布
export const user = {
  method: 'Get',
  path: '/api/user',
  config: {
    handler(request, reply) {
      return reply(data.userData);
    },
  },
};
