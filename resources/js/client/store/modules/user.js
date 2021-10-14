import axios from 'axios';
import {http,httpFile} from '../../services/http_service';
import * as user from '../../services/user_service';

const userModules={
    state:{
        isLogin:null,
        id: null,
        name: '',
        email: ''
    },
    getters:{
        id:state=>state.id,
        name:state=>state.name,
        email:state=>state.email,
    },
    actions:{
        getInfo(context,payload)
        {
            context.commit('SET_ID', payload);
            context.commit('SET_NAME', payload);
            context.commit('SET_EMAIL', payload);
        }
    },
    mutations:{
        SET_ID: (state, payload) => {
            state.isLogin=user.isLogin();
            if(state.isLogin)
            {
                state.id = payload.id;
            }
            else
            {
                state.id ="";
            }
        },
        SET_NAME: (state, payload) => {
            state.isLogin=user.isLogin();
            if(state.isLogin)
            {
                console.log("namaaa",payload.fullname);
                state.name = payload.fullname;
            }
            else
            {
                state.name = "";
            } 
        },
        SET_EMAIL: (state, payload) => {
            state.isLogin=user.isLogin();
            if(state.isLogin)
            {
                state.email = payload.email;
            }
            else
            {
                state.email = "";
            } 
        }
    }
}
export default userModules