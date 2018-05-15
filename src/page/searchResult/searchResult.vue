<template>
    <div class="search-result">
        <search @searchData='searchData' />
    </div>
</template>

<script>
    import Search from '@/common/components/search/search'
    import {searchGoods} from '@/api/shoppingMall'
    import {mapState} from 'vuex'
    export default {
        created() {
            this._searchGoods()
        },
        computed: {
            ...mapState(['searchText'])
        },
        methods: {
            searchData() {
                this._searchGoods()
            },
            _searchGoods() {
                var page = 1 ,text =this.searchText
                searchGoods(page,text).then((res)=>{
                    console.log(res)
                })
            }
        },
        components: {
            Search
        }
    }
</script>

<style scoped>

</style>