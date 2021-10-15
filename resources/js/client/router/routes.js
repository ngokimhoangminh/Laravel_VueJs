import VueRouter from 'vue-router'
import Vue from 'vue';
import * as user from '../services/user_service';
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
        component:()=>import('../View/cart/Cart.vue'),
        beforeEnter(to, from, next)
        {
            if(!user.isLogin())
            {
                next('/user-login');
            }else
            {
                next();
            }
        }
    },
    {
        path:'/checkout',
        name:'checkout',
        component:()=>import('../View/checkout/Checkout.vue'),
        beforeEnter(to, from, next)
        {
            if(!user.isLogin())
            {
                next('/user-login');
            }else
            {
                next();
            }
        }
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