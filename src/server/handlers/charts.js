import * as data from '../mockData/charts';


// 第二页数据
export const submit = {
  method: 'Get',
  path: '/api/submit',
  config: {
    handler(request, reply) {
      return reply(data.submitData);
    },
  },
};

// 第三页数据
export const language = {
  method: 'Get',
  path: '/api/language',
  config: {
    handler(request, reply) {
      return reply(data.languageData);
    },
  },
};
