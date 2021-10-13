import axios from 'axios';
import {http,httpFile} from '../../services/http_service';

const productModules={
    state:{
        product:[],
        productDataUpdate:[],
        product_clone:[],
        product_total:[],
        errors:[],
    },
    getters:{
        product:state=>state.product,
        productDataUpdate:state=>state.productDataUpdate,
    },
    actions:{
            async getProduct({commit}){
                try {
                    const res=await http().get('/product/products');
                    commit('GET_PRODUCT',res.data)
                } catch (error) {
                    console.log(error)
                }
            },
            createProduct({commit},data)
            {
                try{
                    commit('CREATE_PRODUCT',data);
                }catch(error)
                {
                    console.log(error);
                }
            },
            updateProducts({commit},data)
            {
                try{
                    commit('UPDATE_PRODUCT',data);
                }catch(error)
                {
                    console.log(error);
                }
            },
            deleteProduct({commit},id)
            {

                try{
                    commit('DELETE_PRODUCT',id)
                }catch(error)
                {
                    console.log(error)
                }
                
            },
            unActiveProduct({commit},id)
            {
                try{
                    commit('UN_ACTIVE_PRODUCT',id);
                }catch(error)
                {
                    console.log(error)
                }
                
            },
            activeProduct({commit},id)
            {
                try{
                    commit('ACTIVE_PRODUCT',id);
                }catch(error)
                {
                    console.log(error)
                }
                
            },
    },
    mutations:{
     
        GET_PRODUCT(state,products){
            state.product=products.data.data;
            state.product_clone=products.data.data;
            state.product_total=products.data_total;
        },
        CREATE_PRODUCT(state,products){
            state.product.push(products);
            state.product_total.push(products);
            console.log('iioo',state.product_total);
        },
        UPDATE_PRODUCT(state,products){
            const productID=state.product.map(u => u.id).indexOf(products.id);
            state.product.splice(productID,1,products.formdata);
        },
        DELETE_PRODUCT(state,product_id)
        {
            state.product=state.product.filter(pr => pr.id!==product_id);
            console.log("prrrr",state.product);
        },
        UN_ACTIVE_PRODUCT(state,product_id)
        {
            state.product.map(pr=> {
                if(pr.id==product_id){
                    pr.product_status=0;
                }
            })
        },
        ACTIVE_PRODUCT(state,product_id)
        {
            state.product.map(pr=> {
                if(pr.id==product_id){
                    pr.product_status=1;
                }
            })
        },
        FILTER_PRODUCT(state,filters)
        {
            if(filters.category_id==0 && filters.brand_id==0)
            {
                state.product=state.product_clone;
            }
            else if(filters.category_id!=0 && filters.brand_id==0)
            {
                state.product=state.product_total.filter(item=>item.category_id==filters.category_id);
            }
            else if(filters.category_id==0 && filters.brand_id!=0)
            {
                state.product=state.product_total.filter(item=>item.brand_id==filters.brand_id);
            }else
            {
                state.product=state.product_total.filter(item=>item.category_id==filters.category_id && item.brand_id==filters.brand_id);
            }
        }
    },
    
}
export default productModules