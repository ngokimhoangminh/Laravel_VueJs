import axios from 'axios'
import {http,httpFile} from '../../services/http_service';
const categoryModules={
    state:{
        category_blog:[],
    },
    getters:{
        category_blog:state=>state.category_blog,
    },
    actions:{
            async getCategoryBlog({commit}){
                try {
                    const res=await http().get('/categoryBlog/categoryBlog');
                    commit('SET_CATEGORYS_BLOG',res.data)
                } catch (error) {
                    console.log(error)
                }
            },
           
    },
    mutations:{
     
        SET_CATEGORYS_BLOG(state,category_blog){
            state.category_blog=category_blog
        },
        
    },
    
}
export default categoryModules