import {http,httpFile} from './http_service';
 export function createProduct(data)
 {
     return httpFile().post('/product/products',data);
 }

 export function loadeCategories()
 {
     return http().get('/product/get-categires');
 }
 export function loadBrands()
 {
     return http().get('/product/get-brands');
 }
 export function loadeProduct()
 {
     return http().get('/product/products');
 }

 export function deleteProduct(id)
 {
     return http().delete(`/product/products/${id}`);
 } 
 export function editProduct(id)
 {
     return http().get(`/product/products/${id}`+`/edit`);
 } 
 export function updateProduct(id,data)
 {
     return httpFile().post(`/product/products/${id}`,data);
 } 
 export function unactive(id)
 {
     return http().post('/product/unactive',id);
 }
// export function unactive(id)
// {
//     return http().put(`/product/unactive/${id}`,{
//         product_status:0
//     });
// }
 export function active(id)
 {
     return http().post('/product/active',id);
 }
 export function filterProduct(filters)
 {
     return http().post('/product/filter',filters);
 }