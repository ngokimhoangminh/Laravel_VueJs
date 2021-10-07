import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);

const routes=[

    {
        path:'/',
        name:'home',
        component:()=>import('../components/View/Home.vue')
    },
    {
        path:'/product-detail/:id',
        name:'product-detail',
        component:()=>import('../components/View/product/ProductDetail.vue')
    },
    {
        path:'/sign-up',
        name:'sign-up',
        component:()=>import('../components/View/auth/SignUp.vue')
    },
    {
        path:'/user-login',
        name:'user-login',
        component:()=>import('../components/View/auth/Login.vue')
    }
];

const router=new VueRouter({
   // mode:'history',
    routes,
    linkActiveClass:'active'
});
export default router;