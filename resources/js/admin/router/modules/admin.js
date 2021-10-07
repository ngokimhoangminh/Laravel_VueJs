import CustomerList from '../../components/customer/ListComponent';
import CategoriesList from '../../components/categories/ListComponent';
import Products from '../../components/product/ListComponent';
import AddProducts from '../../components/product/FormComponent';
import CustomerShow from '../../components/customer/ShowComponent';
import Home from '../../components/View/Home.vue';
import * as auth from '../../services/auth_service';
const adminRoutes = {
    path:'/home',
    name:'home',
    component:Home,
    children:[
        {
            path:'customer',
            name:'customerlist',
            component:CustomerList,
            beforeEnter(to, from, next)
            {
                console.log(auth.getUserRole());
                if(auth.getUserRole() ==="adminstrator")
                {
                    next();
                }else
                {
                    next('/404');
                }
            }
        },
        {
            path:'categories',
            name:'categorieslist',
            component:CategoriesList
            // beforeEnter(to, from, next)
            // {
            //     console.log(auth.getUserRole());
            //     if(auth.getUserRole() ==="adminstrator")
            //     {
            //         next();
            //     }else
            //     {
            //         next('/404');
            //     }
            // }
        },
        {
            path:'brands',
            name:'brands',
            component:()=>import('../../components/brands/ListComponent.vue')
        },
        {path:'customer/show/:id',name:'customerShow',component:CustomerShow},
        {path:'products',name:'products',component:Products},
        {path:'add-products',name:'add_products',component:AddProducts},
        {path: 'products/:id/edit', name: 'productEdit', component: AddProducts, meta: {mode: 'edit'}},
        {
            path:'category_blog',
            name:'category_blog',
            component:()=>import('../../components/category_blog/ListComponent.vue')
        },
    ],
    beforeEnter(to, from, next)
    {
        if(!auth.isLoggedIn())
        {
            next('/');
        }else
        {
            next();
        }
    }
};

export default adminRoutes;
