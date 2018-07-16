import { searchGoods } from "./shoppingMall";
// const baseUrl = 'https://smile.hucheng123.xin:3003'
const baseUrl = ''
export default {
    index:  baseUrl + '/api/index',
    getCategory: baseUrl + '/api/getCategory',
    getMallGoods: baseUrl + '/api/getMallGoods',
    getGoodsDetail: baseUrl + '/api/getGoodsDetail',
    searchGoods: baseUrl + '/api/search'
}