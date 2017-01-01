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
