import axios from 'axios';
import {http,httpFile} from '../../services/http_service';

const productModules={
    state:{
        products:[],
    },
    getters:{
        products:state=>state.products,
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
           
    },
    mutations:{
        GET_PRODUCT(state,products){
            state.products=products.data.data;
        },
    }
}
export default productModules