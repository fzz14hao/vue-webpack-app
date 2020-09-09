import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';


Vue.use(Router);
const router = new Router({
  // 前后分离所需要的base指向
  // base: '/app',
  // 使用history模式不会有#号
  mode: 'history',
  routes
});



export default router;
