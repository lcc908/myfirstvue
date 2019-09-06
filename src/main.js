import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

import MyHttpServer from '@/plugins/http.js'

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(MyHttpServer);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
