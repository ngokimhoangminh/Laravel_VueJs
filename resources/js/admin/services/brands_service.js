import {http,httpFile} from './http_service';
 export function createBrand(data)
 {
     return http().post('/brand/brands',data);
 }

 export function loadeBrand()
 {
     return http().get('/brand/brands');
 }

 export function deleteBrand(id)
 {
     return http().delete(`/brand/brands/${id}`);
 } 

 export function updateBrand(id,data)
 {
     return http().put(`/brand/brands/${id}`,data);
 } 
 export function unactive(id)
 {
     return http().post('/brand/unactive',id);
 }
 export function active(id)
 {
     return http().post('/brand/active',id);
 }