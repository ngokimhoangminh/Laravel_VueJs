import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isLoggedIn:null,
        apiURL:'http://127.0.0.1:8000/api',
        serverPath:'http://127.0.0.1:8000/',
        profile:{}
    },
    mutations:{
    },
    actions:{
    },
    modules: {
        home
    }
 });