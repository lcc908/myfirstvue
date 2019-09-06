// 插件模块
import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install =  (Vue) => {

  //  添加实例方法
  axios.defaults.baseURL = 'http://www.mainbo.com'
  Vue.prototype.$http = axios
}
export default MyHttpServer
