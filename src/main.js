import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import {post,fetch} from './https.js'

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
