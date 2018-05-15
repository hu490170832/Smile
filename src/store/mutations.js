import * as types from './mutation-types'

const mutations = {
    [types.SET_SEARCHTEXT](state, searchText) {
        console.log(searchText)
        state.searchText = searchText
    }
}

export default mutations