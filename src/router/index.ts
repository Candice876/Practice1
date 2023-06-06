import {
    createWebHashHistory,
    createRouter,
    RouteRecordRaw 
} from 'vue-router'

const Routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'home',
        component: function(){
            return import('../pages/home.vue')
        }
    },
    {
        path:'/about',
        name:'about',
        component: function(){
            return import('../pages/about.vue')
        }
    },
    {
        path:'/product',
        name:'product',
        component: function(){
            return import('../pages/product.vue')
        }
    },
    {
        path:'/theme',
        name:'theme',
        component: function(){
            return import('../pages/theme.vue')
        }
    },
    {
        path:'/:pathMatch(.*)*',
        name:'error',
        component: function(){
            return import ('../pages/error.vue')
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: Routes
})

export default router