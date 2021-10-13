import axios from 'axios'
import {http,httpFile} from '../../services/http_service';
const brandModules={
    state:{
        brands:[],
    },
    getters:{
        brands:state=>state.brands,
    },
    actions:{
            async getBrand({commit}){
                try {
                    const res=await http().get('/brand/brands');
                    commit('SET_BRAND',res.data.data_total)
                } catch (error) {
                    console.log(error)
                }
            },
           
    },
    mutations:{

        SET_BRAND(state,brand){
            state.brands=brand
        },
        
    },
    
}
export default brandModules