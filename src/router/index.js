import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default.vue'
const blankPage = () => import('@/layout/blank.vue')

const Index = () => import('@/page/indexView.vue') // 首页
const ChangeCity = () => import('@/page/changeCity.vue') // 切换城市页面
const GoodsList = () => import('@/page/goodsList.vue') // 商品列表
const Login = () => import('@/page/login.vue') //登陆
const Register = () => import('@/page/register.vue') //注册

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity,
      },
      {
        path: 's/:name',
        name: 'goods',
        component: GoodsList,
      },
    ],
  },
  {
    path: '/blank',
    name: 'blankPage',
    component: blankPage,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
