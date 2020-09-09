const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../pages/Index.vue')
  },
  {
    path: '/index',
    name: '首页',
    component: () => import('../pages/Index.vue')
  },
  {
    path: '/user',
    name: '用户',
    component: () => import('../pages/User.vue')
  }
];

export default routes;
