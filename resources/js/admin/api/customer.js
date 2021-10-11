import {apiRequest} from "../helpers/apiRequest";
import {apiMethod} from "../constants/apiMethod";

export const showCustomer = (id) =>
{
    return new Promise(
        (resolve,reject)=>
        {
            apiRequest('/api/customers/' +id)
            .then(res => resolve(res))
            .catch(function (error){
                reject(error)
            })
        }
    )
}
export const deleteCustomer =(id) =>
{
    return new Promise(
        (resolve,reject)=>
        {
            apiRequest('/api/customers/' +id,apiMethod.delete)
            .then(res => resolve(res))
            .catch(function (error){
                reject(error)
            })
        }
    )
}
export const createCustomer = (formData) => {
    return new Promise(
        (resolve, reject) => {
            apiRequest('/api/customers', apiMethod.post, formData)
                .then(res => resolve(res))
                .catch(function (error) {
                    reject(error)
                })
        }
    )
}
export const updateCustomer = (formData) => {
    return new Promise(
        (resolve, reject) => {
            apiRequest('/api/customers/' + formData.id_customer, apiMethod.put, formData)
                .then(res => resolve(res))
                .catch(function (error) {
                    reject(error)
                })
        }
    )
}

