
export function setToken(user)
{
    sessionStorage.setItem('user_info',JSON.stringify(user));
}