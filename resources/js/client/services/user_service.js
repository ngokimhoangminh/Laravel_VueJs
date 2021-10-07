import {http,httpFile} from './http_service';
//cai dat trong npmjs.com  jsonwebtoken
 export function signup(user)
 {
     return http().post('/user/signup',user);
 }
 export function login(user)
 {
     return http().post('/user/login',user);
 }