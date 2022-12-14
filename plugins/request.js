// 基于axios封装的模块

import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://api.realworld.io'
});

// 通过插件机制获取到上下文对象 （query/params/req/res/app/store...）
// 插件导出函数必须作为default成员
export default ({store}) => {
  request.interceptors.request.use(
    config => {
      // 统一挂载token
      const {user} = store.state;
      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
};
