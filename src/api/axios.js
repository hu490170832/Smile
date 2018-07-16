import axios from 'axios'
import Vue from 'vue'
axios.interceptors.request.use(config=>{
    config.params =  Object.assign({},config.params,{
        shopId: '402880e860166f3c0160167a9c0a0003'
    })
    console.log(config.params)
    return config
},err=>{

})

axios.install = (Vue) => {
    Vue.prototype.$axios = axios
  }
  
export default axios