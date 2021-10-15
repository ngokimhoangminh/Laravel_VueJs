import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);

const routes=[

    {
        path:'/',
        name:'home',
        component:()=>import('../View/Home.vue')
    },
    {
        path:'/product-detail/:params',
        name:'product-detail',
        component:()=>import('../View/product/ProductDetail.vue')
    },
    {
        path:'/cart',
        name:'cart',
        component:()=>import('../View/cart/Cart.vue')
    },
    {
        path:'/checkout',
        name:'checkout',
        component:()=>import('../View/checkout/Checkout.vue')
    },
    {
        path:'/sign-up',
        name:'sign-up',
        component:()=>import('../View/auth/SignUp.vue')
    },
    {
        path:'/user-login',
        name:'user-login',
        component:()=>import('../View/auth/Login.vue')
    }
];

const router=new VueRouter({
   // mode:'history',
    routes,
    linkActiveClass:'active'
});
export default router;