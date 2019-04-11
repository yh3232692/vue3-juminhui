import axios from 'axios';
import { MessageBox,Indicator } from 'mint-ui'; 

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='https://cshop.jminhui.com/Api/';

//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type':'application/x-www-form-urlencoded'
        }
        // if(token){
        //   config.params = {'token':token}
        // }
        Indicator.open({
            text: '加载中,请稍后...',
            spinnerType: 'fading-circle'
        });
        return config;
        
    },
    error => {
        MessageBox.alert('数据加载超时,请检查您的网络或稍后重试!').then(action => {
            Indicator.close();
        });
        return Promise.reject(err);
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
        console.log(response)
        console.log('=========================================')
        Indicator.close();
        return response;
    },
    error => {
        MessageBox.alert('数据加载失败!').then(action => {
            Indicator.close();
        });
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
            },err => {
                reject(err)
            })
    })
}
  

