import axios from 'axios'
import apiUrl from './config'
export async function getCategory() {
    var ret
    await axios.get(apiUrl.getCategory)
        .then(function (response) {
            ret = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    return ret
}

export async function getMallGoods(params) {
    var ret
    await axios.get(apiUrl.getMallGoods,{
        params: params
    })
        .then(function (response) {
            ret = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    return ret
}