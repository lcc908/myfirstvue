import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import moment from 'moment'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'

Vue.config.productionTip = false;

  //  添加实例方法
axios.defaults.baseURL = 'http://www.mainbo.com'
Vue.prototype.$http = axios

Vue.use(ElementUI);


//全局过滤器处理时间日期格式
Vue.filter('fmtdate',(v)=>{
  return moment(v).format("YYYY-MM-DD")
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
