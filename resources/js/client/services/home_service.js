import {http,httpFile} from './http_service';
export function loadeCategory()
{
     return http().get('/category/categories');
}
export function loadeProduct()
{
    return http().get('/product/products');
}