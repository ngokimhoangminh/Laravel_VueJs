import {http,httpFile} from './http_service';
import * as helpers from '../helpers/setToken';
import store from '../store/store';

 export function signup(user)
 {
     return http().post('/user/signup',user);
 }
 export function login(user)
 {
    return http().post('/user/login',user)
    .then(response =>{
        if(response.status===200)
        {
            helpers.setToken(response.data.user);
            store.dispatch('getInfo',response.data.user);
        }
        
        return response.data.user;
    });
 }
 export function isLogin()
 {
    const token=JSON.parse(sessionStorage.getItem("user_info"));
    return token!=null;
 }
 export function logout()
 {
    sessionStorage.removeItem('user_info');
    localStorage.removeItem('checkProducts');
    localStorage.removeItem('carts');
    store.dispatch('getInfo',"");
 }