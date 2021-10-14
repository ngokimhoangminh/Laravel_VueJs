import {http,httpFile} from './http_service';

export function loadCart()
{
     return http().get('/cart/carts');
}

export function createCart(data)
{
     return http().post('/cart/carts',data);
}

 export function deleteCart(id)
 {
     return http().delete(`/cart/carts/${id}`);
 } 

 export function updateCart(id,data)
 {
     return http().post(`/cart/carts/${id}`,data);
 } 
