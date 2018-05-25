import * as types from './mutation-types'

const mutations = {
    [types.SET_SEARCHTEXT](state, searchText) {
        state.searchText = searchText
    },
    [types.SET_RECOMMENDLIST](state, newList) {
        state.recommendList = newList
    }
}

export default mutations