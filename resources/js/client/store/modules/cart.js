import axios from 'axios';
import {http,httpFile} from '../../services/http_service';

const cartModules={
    state:{
        carts:[],
        subTotal:0,
        tax:0,
        grandTotal:0
    },
    getters:{
        carts:state=>state.carts,
    },
    actions:{
            async getCart({commit},id){
                try {
                    const res=await http().get(`/cart/carts/${id}`);
                    commit('GET_CART',res.data)
                } catch (error) {
                    console.log(error)
                }
            },
            createCart({commit},data)
            {
                console.log("add cart", data);
                try{
                    commit('CREATE_CART',data);
                }catch(error)
                {
                    console.log(error);
                }
            },
            deleteCart({commit},id)
            {

                try{
                    commit('DELETE_CART',id)
                }catch(error)
                {
                    console.log(error)
                }
                
            },

    },
    mutations:{
        GET_CART(state,data){
            state.carts=data;
        },
        CREATE_CART(state,data){
            state.carts.push(data);
        },
        DELETE_CART(state,cart_id)
        {
            state.carts=state.carts.filter(cart => cart.id!==cart_id);
        },
        TOTAL_CART(state,datas)
        {
            state.datas.map(data=> {
                console.log("giá nha",data);
            })
        }
    },
    
}
export default cartModules