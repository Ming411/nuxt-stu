const cookieparser = process.server ? require('cookieparser') : undefined;
// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必将stata定义为一个函数
export const state = () => {
  return {
    user: null
  };
};
export const mutations = {
  setUser(state, data) {
    state.user = data;
  }
};

export const actions = {
  //nuxtServerInit是一个特殊的action方法
  //这个action会在服务端渲染期间自动调用
  //作用：初始化容器数据，传递数据给客户端使用
  nuxtServerInit({commit}, {req}) {
    let user = null;
    if (req.headers.cookie) {
      // cookieparser 用于解析cookie中的数据
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        user = JSON.parse(parsed.user);
      } catch (err) {}
    }
    // 将cookie中的数据保存到state中
    commit('setUser', user);
  }
};
