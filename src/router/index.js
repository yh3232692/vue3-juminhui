import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Chain from '@/pages/chain/Chain'
import Cart from '@/pages/cart/Cart'
import Person from '@/pages/person/Person'
import SpecialDay from '@/pages/SpecialDay/SpecialDay'



Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
            meta: { keepAlive: true },
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart,
            meta: { keepAlive: true}
        },
        {
            path:'/person',
            name:'Person',
            component:Person,
            meta: { keepAlive: true}
        },
        {
            path:'/special-day',
            name:'SpecialDay',
            component:SpecialDay
        }
    ],
    mode:"history",
})