import Vue from 'vue'
import Vuex from 'vuex'
import loadingState from './modules/loadingState.js'

Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        loadingState
    }
})

export default store



