// 验证是否登录的中间件
// 会在路由初始化之前就调用

export default function ({store, redirect}) {
  if (!store.state.user) {
    return redirect('/login');
  }
}
