import axios from 'axios';
import {http,httpFile} from '../../services/http_service';

const homeModules={
    state:{
        products:[],
        categorys:[],
    },
    getters:{
        products:state=>state.products,
        categorys:state=>state.categorys,
    },
    actions:{
            async getProduct({commit}){
                try {
                    const res=await http().get('/home/products');
                    commit('GET_PRODUCT',res.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async getCategory({commit}){
                try {
                    const res=await http().get('/category/categories');
                    commit('SET_CATEGORYS',res.data.data_total)
                } catch (error) {
                    console.log(error)
                }
            },
    },
    mutations:{
        GET_PRODUCT(state,products){
            console.log("ppp",products);
            state.products=products.data.data;
        },
        SET_CATEGORYS(state,categotys){
            state.categorys=categotys
        },
    }
}
export default homeModules