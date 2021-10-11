import {http,httpFile} from './http_service';
 export function createCategory(data)
 {
     return httpFile().post('/category/categories',data);
 }

 export function loadeCategory()
 {
     return  http().get('/category/categories');
 }

 export function deleteCategory(id)
 {
     return http().delete(`/category/categories/${id}`);
 } 

 export function updateCategory(id,data)
 {
     return httpFile().post(`/category/categories/${id}`,data);
 } 