/**********************************************************************************
 * ================================================================================
 * 文件说明：封装数据请求的公用方法，跨域
 *          技术栈：vue axios js-md5 qs
 * Author   Mr.Yao
 * Date     2019年4月14日
 * ================================================================================
 *********************************************************************************/

import axios from 'axios';
import 'mint-ui/lib/style.css';
import store from './store/store.js'
import { mapState, mapGetters, mapActions } from "vuex";
import { MessageBox,Indicator } from 'mint-ui'; 
import md5 from 'js-md5';
import qs from 'qs';    //处理发起网络请求传递后台参数的格式

let isGlobalLoading = false;

axios.defaults.timeout = 10000;
// axios.defaults.headers.common['Authorization'] = ''

// axios.defaults.baseURL ='https://cshop.jminhui.com/Api/';

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // console.log(store)
        // console.log(store.getters);
        isGlobalLoading = store.getters['loadingState/isOpen'];
        if (isGlobalLoading) {
            // 开始调用全局loading组件
            store.dispatch("loadingState/isShowFun",true)
        }
        

        // const token = getCookie('session'); //注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = qs.stringify(getSign(config.data));

        config.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        console.log(config.data)
        
        return config;
    },
    error => {
        MessageBox.alert('数据加载超时,请检查您的网络或稍后重试!').then(action => {
            if (isGlobalLoading) {
                store.dispatch("loadingState/isShowFun",false)   
            }
        });
        console.log(error);
        return Promise.reject(error);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        // if(response.data.errCode ==2){
        //     router.push({
        //         path:"/login",
        //         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        //     })
        // }
        console.log('=============亲，数据包回来了=============')
        console.log(response.data)
        console.log('=========================================')
        if (isGlobalLoading) {
            store.dispatch("loadingState/isShowFun",false)
        }
        return response;
    },
    error => {
        MessageBox.alert('数据加载失败!').then(action => {
            if (isGlobalLoading) {
                store.dispatch("loadingState/isShowFun",false)
            }
        });
        console.log(error);
        return Promise.reject(error)
    }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}
  
  
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
  
export function post(url,data = {}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


// 当前项目请求接口的秘钥算法

// 获取app接口权限的算法,param必须传的属性（time,unique_id）
function getSign (param) {
    var obj = param;
    var time = getTimesTamp();          //保存时间属性，用来计算
    // obj.unique_id = "BFCB2A6C-96C2-4CA1-9321-9566CD123ABC";
    var str = objKeySort(obj);                //先进行排序
    str = str + time + "cshop.jminhui.com";
    // str=str + time + "shoptest.jminhui.com";
    str = md5(str).toLocaleLowerCase();
    obj.time = time;
    obj.sign = str;
    return obj;
}
 
// 获取时间戳
function getTimesTamp () {
    var timestamp = Date.parse(new Date());  
    timestamp = timestamp / 1000;
    return timestamp;
}
 
// 排序的算法
function objKeySort(obj) {
    //排序的函数
    var newkey = Object.keys(obj).sort();
　　//先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行     排序，newkey是一个数组
    var newObj = {};//创建一个新的对象，用于存放排好序的键值对
    var str = '';
    for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
        str += obj[newkey[i]];  
    }
    // return newObj;//返回排好序的新对象
    return str;
}





