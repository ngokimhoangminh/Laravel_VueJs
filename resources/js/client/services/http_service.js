import axios from 'axios';
import store from '../store/store';
export function http()
{
    return axios.create({
        baseURL:store.state.apiURL,
        // headers:{
        //     Authorization: 'Bearer '+auth.getAccessToken(),
        // }
    });
}

export function httpFile()
{
    return axios.create({
        baseURL:store.state.apiURL,
        headers:{
            'Content-Type':'multipart/form-data'
        }
    });
}