import {http,httpFile} from './http_service';
 export function createCategoryBlog(data)
 {
     return http().post('/categoryBlog/categoryBlog',data);
 }

 export function loadCategoryBlog()
 {
     return http().get('/categoryBlog/categoryBlog');
 }

 export function deleteCategoryBlog(id)
 {
     return http().delete(`/categoryBlog/categoryBlog/${id}`);
 } 
 export function editCategoryBlog(id)
 {
     return http().get(`/categoryBlog/categoryBlog/${id}`+`/edit`);
 } 
 export function updateCategoryBlog(id,data)
 {
     return http().put(`/categoryBlog/categoryBlog/${id}`,data);
 } 
