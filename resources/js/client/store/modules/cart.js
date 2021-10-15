import axios from 'axios';
import {http,httpFile} from '../../services/http_service';

const cartModules={
    state:{
        carts:[],
        subTotal:0,
        tax:0,
        grandTotal:0,
        checkProduct:[],
        checkoutData:[],
    },
    getters:{
        carts:state=>state.carts,
        checkProduct:state=>state.checkProduct,
        checkoutData:state=>state.checkoutData,
        subTotal:state=>state.subTotal,
        tax:state=>state.tax,
        grandTotal:state=>state.grandTotal
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
                
            }
            // totalCart({commit},data)
            // {
            //     try{
            //         commit('TOTAL_CART',data);
            //     }catch(error)
            //     {
            //         console.log(error);
            //     }
            // },
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
        CHECK_PRODUCT(state,checkProduct)
        {
            state.checkProduct=checkProduct;
        },
        TOTAL_CART(state,datas)
        {
            state.subTotal=datas.reduce((totalPrice, data, index, datas) => {
                return totalPrice += (parseInt(data.product_price)*parseInt(data.quantity))
            }, 0)
            state.tax=parseInt(state.subTotal)*0.1;
            state.grandTotal=parseInt(state.tax)+parseInt(state.subTotal);
        },
        GET_CHECKOUT(state,datas)
        {
            
            state.carts.filter(cart => {
                datas.map(data=>{
                    if(cart.id==data)
                    {
                        state.checkoutData.push(cart);
                    } 
                })
            })
        }
    },
    
}
export default cartModules