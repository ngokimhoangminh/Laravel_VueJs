import {http,httpFile} from './http_service';
export function ProductDetail(id)
{
    return http().get(`/product/products/${id}`);
}