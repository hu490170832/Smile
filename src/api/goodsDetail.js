import axios from 'axios'
import apiUrl from './config'

export async function getGoodsDetail(goodId) {
    var ret
    await axios.get(apiUrl.getGoodsDetail,{
        params:{
            goodId
        }
    })
        .then(function (response) {
            ret = response.data
        })
        .catch(function (error) {
            ret.data = error
            console.log(error);
        });
    return ret
}