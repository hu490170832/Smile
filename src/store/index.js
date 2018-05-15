import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

 Vue.use(Vuex)

 const debug = process.env.NODE__ENV !== 'production'

 export default new Vuex.Store({
    state,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []   
 })