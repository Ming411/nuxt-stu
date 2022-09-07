module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      // 清除Nuxt默认生成的路由表
      routes.splice(0);
      routes.push(
        ...[
          {
            path: '/',
            // 默认查找index.vue
            component: resolve(__dirname, 'pages/layout/'),
            children: [
              {
                path: '', // 默认子路由
                name: 'home',
                component: resolve(__dirname, 'pages/home/')
              },
              {
                path: '/login',
                name: 'login',
                component: resolve(__dirname, 'pages/login/index.vue')
              },
              {
                path: '/register',
                name: 'register',
                component: resolve(__dirname, 'pages/login/')
              }
            ]
          }
        ]
      );
    }
  }
};
