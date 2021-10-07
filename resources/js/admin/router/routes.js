import VueRouter from 'vue-router'
import Vue from 'vue';
Vue.use(VueRouter);
import registerRoutes from './modules/register';
import adminRoutes from './modules/admin';
import * as auth from '../services/auth_service';
const routes=[
    // {
    //     //home là link cha, nếu muốn vào dược customer thì phải qua link cha: /home/customer
    //     path:'/home',
    //     name:'home',
    //     component:Home,
    //     children:[
    //         {
    //             path:'customer',
    //             name:'customerlist',
    //             component:CustomerList,
    //             beforeEnter(to, from, next)
    //             {
    //                 console.log(auth.getUserRole());
    //                 if(auth.getUserRole() ==="adminstrator")
    //                 {
    //                     next();
    //                 }else
    //                 {
    //                     next('/404');
    //                 }
    //             }
    //         },
    //         {
    //             path:'categories',
    //             name:'categorieslist',
    //             component:CategoriesList
    //             // beforeEnter(to, from, next)
    //             // {
    //             //     console.log(auth.getUserRole());
    //             //     if(auth.getUserRole() ==="adminstrator")
    //             //     {
    //             //         next();
    //             //     }else
    //             //     {
    //             //         next('/404');
    //             //     }
    //             // }
    //         },
    //         {
    //             path:'brands',
    //             name:'brands',
    //             component:()=>import('../components/brands/ListComponent.vue')
    //         },
    //         {path:'customer/show/:id',name:'customerShow',component:CustomerShow},
    //         {path:'products',name:'products',component:Products},
    //         {path:'add-products',name:'add_products',component:AddProducts},
    //         {path: 'products/:id/edit', name: 'productEdit', component: AddProducts, meta: {mode: 'edit'}}
    //     ],
    //     beforeEnter(to, from, next)
    //     {
    //         if(!auth.isLoggedIn())
    //         {
    //             next('/');
    //         }else
    //         {
    //             next();
    //         }
    //     }
    //     //nếu chưa đăng nhập thì tới Login, đăng nhập r thì tới ...
    // },
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