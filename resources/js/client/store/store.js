import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import user from './modules/user';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        apiURL:'http://127.0.0.1:8000/api',
        serverPath:'http://127.0.0.1:8000/',
        profile:{}
    },
    mutations:{
    },
    actions:{
    },
    modules: {
        home,
        user,
        cart
    }
 });