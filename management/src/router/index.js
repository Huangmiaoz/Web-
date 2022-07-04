// 当前项目的路由模块
// 导入Vue和VueRouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

// 调用Vue.use()函数，把VueRouter安装为Vue插件
Vue.use(VueRouter);

// 创建路由实例对象
const router = new VueRouter({
    // 声明路由关系
    routes : [
        { path: '/', redirect: '/login' },
        // 登录的路由规则
        { path: '/login', component: Login },
        // 后台主页的路由规则
        {
          path: '/home',
          component: Home,
          redirect: '/home/users',
          children: [
            { path: 'users', component: Users },
            { path: 'rights', component: Rights },
            { path: 'goods', component: Goods },
            { path: 'orders', component: Orders },
            { path: 'settings', component: Settings },
            // 用户详情页的路由规则
            { path: 'userinfo/:id', component: UserDetail, props: true }
          ]
        }
    ]
})

// 向外共享路由的实例对象
export default router;

// 全局前置守卫
router.beforeEach(function(to,from,next) {
    if(to.path === '/home') {
        const token = localStorage.getItem('token');
        if(token) {
            next();
        } else {
            next('/login');
        }
    } else {
        next();
    }
})