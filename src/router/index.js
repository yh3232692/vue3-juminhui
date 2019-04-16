import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Chain from '@/components/chain/Chain'
import HuiHome from '@/components/huiHome/HuiHome'
import Cart from '@/components/cart/Cart'
import Person from '@/components/person/Person'



Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/chain',
            name:'Chain',
            component:Chain
        },
        {
            path:'/huiHome',
            name:'HuiHome',
            component:HuiHome
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart
        },
        {
            path:'/person',
            name:'Person',
            component:Person
        },
    ],
    mode:"history"
})