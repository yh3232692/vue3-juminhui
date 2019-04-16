/**********************************************************************************
 * ================================================================================
 * 文件说明：项目初始化最开始运行脚本文件
 *          注册全局VUE公用方法(如请求数据，vuex全局变量管理)
 * Author   Mr.Yao
 * Date     2019年4月14日
 * ================================================================================
 *********************************************************************************/


import Vue from 'vue'
import App from './App.vue'
import {post,fetch} from './https.js'
import store from './store/store.js'
import router from './router/index.js'

//定义全局变量
Vue.prototype.$post   = post;  //post
Vue.prototype.$fetch  = fetch; //fetch


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
