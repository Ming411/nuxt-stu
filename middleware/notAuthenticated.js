export default function ({store, redirect}) {
  if (store.state.user) {
    // 已经登录不必要访问的页面
    return redirect('/');
  }
}
