import axios from 'axios';
import {http,httpFile} from '../../services/http_service';
import * as helpers from '../../helpers/setCart';

function GET_CART() {
    const carts = localStorage.getItem('carts');
    if (carts && carts.length) {
        return JSON.parse(carts);
    }
    return [];
}
const cartModules={
    state:{
        carts:GET_CART(),
        subTotal:0,
        tax:0,
        grandTotal:0,
        checkoutData:[],
    },
    getters:{
        carts:state=>state.carts,
        checkoutData:state=>state.checkoutData,
        subTotal:state=>state.subTotal,
        tax:state=>state.tax,
        grandTotal:state=>state.grandTotal
    },
    
    actions:{
            async getCart({commit},id){
                try {
                    const res=await http().get(`/cart/carts/${id}`);
                    helpers.setCart(res.data);
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
            async editCart({commit},data)
            {
                try{
                    await http().put(`/cart/carts/${data.id}`,data);
                    commit('EDIT_CART',data);
                }catch(error)
                {
                    console.log(error)
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
    },
    mutations:{

        CREATE_CART(state,data){
            state.carts.push(data);
            helpers.setCart(state.carts);
        },
        DELETE_CART(state,cart_id)
        {
            state.carts=state.carts.filter(cart => cart.id!==cart_id);
            helpers.setCart(state.carts);
        },
        EDIT_CART(state,cart){
            const cartId=state.carts.map(u => u.id).indexOf(cart.id);
            state.carts.splice(cartId,1,cart);
            helpers.setCart(state.carts);
        },
        CHANGE_PRICE(state,data){
            state.carts.map(cart=> {
                if(cart.id==data.id){
                    cart.quantity=data.quantity
                }
            })
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
            state.checkoutData=[];
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