module.exports = {
  router: {
    // 修改nuxt-link选中时的默认高亮类名
    linkActiveClass: 'active',
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
              },
              {
                path: '/profile/:username',
                name: 'profile',
                component: resolve(__dirname, 'pages/profile/')
              },
              {
                path: '/settings',
                name: 'settings',
                component: resolve(__dirname, 'pages/settings/')
              },
              {
                path: '/editor',
                name: 'editor',
                component: resolve(__dirname, 'pages/editor/')
              },
              {
                path: '/article/:slug',
                name: 'article',
                component: resolve(__dirname, 'pages/article/')
              }
            ]
          }
        ]
      );
    }
  }
};
