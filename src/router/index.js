import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Chain from '@/pages/chain/Chain'
import Cart from '@/pages/cart/Cart'
import Person from '@/pages/person/Person'



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
            path:'/chain',
            name:'Chain',
            component:Chain,
            meta: { keepAlive: true}
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
    ],
    mode:"history",
    scrollBehavior (to, from, savedPosition) {
        // console.log(savedPosition);
        // if (savedPosition) {
		//     return savedPosition
		// } else {
		// 	if (from.meta.keepAlive) {
        //         from.meta.savedPosition = document.documentElement.scrollTop || document.body.scrollTop;
		// 		console.log(from.meta.savedPosition);
		// 	}
		//     return { x: 0, y: to.meta.savedPosition || 0 }
		// }
    },
})