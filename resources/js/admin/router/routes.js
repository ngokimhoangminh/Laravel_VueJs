import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);
import registerRoutes from './modules/register';
import adminRoutes from './modules/admin';
import * as auth from '../services/auth_service';
const routes=[
    adminRoutes,
    registerRoutes
    ,
    {
        path:'/',
        name:'login',
        component:()=>import('../components/Authentication/Login.vue'),
        beforeEnter(to, from, next)
        {
            if(!auth.isLoggedIn())
            {
                next();
            }else
            {
                next('/home');
            }
        }
        ////nếu chưa đăng nhập thì tới ..., đăng nhập r thì chỉ đc tới trang home
    },
    {
        path:'/reset-password-request',
        name:'reset-password-request',
        component:()=>import('../components/Authentication/ResetPasswordRequest.vue'),
        beforeEnter(to, from, next)
        {
            if(!auth.isLoggedIn())
            {
                next();
            }else
            {
                next('/home');
            }
        }
    },
    {
        path:'/reset-password/:email',
        name:'reset-password',
        component:()=>import('../components/Authentication/ResetPassword.vue'),
        beforeEnter(to, from, next)
        {
            if(!auth.isLoggedIn())
            {
                next();
            }else
            {
                next('/home');
            }
        }
    },
    {
        path:'/404',
        name:'404',
        component:()=>import('../components/Errors/404.vue'),    
    }

];

const router=new VueRouter({
   // mode:'history',
    routes,
    linkActiveClass:'active'
});
export default router;