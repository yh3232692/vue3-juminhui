import { stat } from "fs";
import { resolve } from "path";
import { reject } from "q";

/**********************************************************************************
 * ================================================================================
 * 文件说明：Loading全局vuex状态
 * Author   Mr.Yao
 * Date     2019年4月14日
 * ================================================================================
 *********************************************************************************/


const state = {             
    loadingState: false,     //全局loading组件的显示隐藏
    openLoading: false       //是否使用全局Loading组件
}

const getters = {       //实时监听state值的变化(最新状态)
    isShow(state) {     //返回组件显示隐藏
        return state.loadingState
    },
    isOpen() {          //返回是否使用当前组件
        return state.openLoading
    }
}
const mutations = { 
    // 自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    // 当前改变state状态的方法属于同步执行
    isShow(state, bool) {  //bool参数代表当前的boolean值，true或者false用来显示或隐藏当前loading
        state.loadingState = bool
    },
    isOpen(state, bool) {   //bool参数代表当前的boolean值，true或者false用来判断是否开启当前组件
        state.openLoading = bool
    }
}
const actions = {
    //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    //当前改变state状态的方法属于异步执行
    isShowFun(context, bool) {
        context.commit('isShow', bool)
    },
    isOpenFun(context, bool){
        context.commit('isOpen', bool)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}