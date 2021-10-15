import {http,httpFile} from './http_service';
import jwt from 'jsonwebtoken';
import store from '../store/store';
//cai dat trong npmjs.com  jsonwebtoken
 export function register(user)
 {
     return http().post('/auth/register',user);
 }
 export function login(user)
 {
     return http().post('/auth/login',user)
     .then(response =>{
        if(response.status===200)
        {
            setToken(response.data);
        }
        return response.data;
     });
 }
 function setToken(user)
 {
    const token = jwt.sign({ user: user }, 'laravelvuengokimhoangminh');
    sessionStorage.setItem('laravel-vue-spa-token',JSON.stringify(token));
    sessionStorage.setItem('laravel-user',JSON.stringify(user));
    store.dispatch('authenticate',user.user);
 }
 export function isLoggedIn()
 {
     const token=sessionStorage.getItem('laravel-vue-spa-token');
     return token!=null;
 }
 export function logout()
 {
    http().get('/auth/logout');
    sessionStorage.removeItem('laravel-vue-spa-token');
    sessionStorage.removeItem('user-role');
 }
 export function getAccessToken()
 {
    const token=sessionStorage.getItem('laravel-vue-spa-token');
    if(!token)
    {
        return null;
    }
    const tokenData=jwt.decode(token);
    return tokenData.user.access_token;
 }
 export function getUserRole()
 {
    const user=sessionStorage.getItem('user-role');
    // if(!user)
    // {
    //     return null;
    // }
    return user;
 }
 export function getProfile()
 {
     return http().get('/auth/profile');
 }
 export function ResetPasswordRequest(user)
 {
     return http().post('/auth/reset-password-request',user);
 }
 export function ResetPassword(user)
 {
     return http().post('/auth/reset-password',user);
 }
