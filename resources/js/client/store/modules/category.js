import {http,httpFile} from '../../services/http_service';
const categoryModules={
    state:{
        categorys:[],
    },
    getters:{
        categorys:state=>state.categorys,
    },
    actions:{
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
        SET_CATEGORYS(state,categotys){
            state.categorys=categotys
        },
    },
    
}
export default categoryModules