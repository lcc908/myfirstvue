import Vue from 'vue'
import Router from 'vue-router'
import News from '../components/news.vue'
import book from '../components/book.vue'
import guangao from '../components/guanggao.vue'
import login from '../views/login.vue'
import index from '../views/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/index',
      name: '首页',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/book',
      name: 'books',
      component: book
    },
    {
      path: '/guanggao',
      name: 'guanggap',
      component: guangao
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },

  ]
})
