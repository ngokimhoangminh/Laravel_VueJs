export function setCart(data)
{
    localStorage.setItem('carts',JSON.stringify(data));
}