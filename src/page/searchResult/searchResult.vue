<template>
    <div class="search-result">
        <search @searchData='searchData' />
        <div class="scroll-container">
            <div class="no-data" v-show="!dataList.length">
                sorry! 没有搜索到你要的结果
            </div>
            <cube-scroll class="search-content" v-show="dataList.length">
                <div class="list">
                    <div class="item" v-for="item in dataList" :key="item.goodsId">
                        <img :src="item.image" alt="">
                        <div class="desc">{{item.goodsName}}</div>
                        <div class="price">
                            <span class="new">￥{{item.PRESENT_PRICE}}</span>
                            <span class="old">￥{{item.price}}</span>
                            
                        </div>
                    </div>
                </div>
            </cube-scroll>
        </div>
        
    </div>
</template>

<script>
    import Search from '@/common/components/search/search'
    import {searchGoods} from '@/api/shoppingMall'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                dataList: []
            }
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
                    if(!res.data) {
                        return
                    }
                    this.dataList = res.data
                    console.log(res)
                })
            }
        },
        activated() {
            this._searchGoods()
        },
        components: {
            Search
        }
    }
</script>

<style lang='stylus' scoped>
    .scroll-container
        background #eee
        position absolute
        top 44px 
        bottom 0px
        width 100%
        padding 0 2px
        box-sizing border-box
        .no-data
            width 90%
            font-size 16px
            margin 0 auto
            text-align center
            color #9e9e9e
            height 40px
            line-height 40px
            background #fff
            margin-top 10px
            box-shadow 0 0 4px rgba(0,0,0,.1)
        .search-content
            .list
                display flex
                flex-wrap wrap
                .item
                    width 50%
                    min-height 200px
                    background #fff
                    margin-bottom 6px
                    box-sizing border-box
                    &:nth-of-type(2n-1) 
                        border-right 0.16rem solid #eee
                    img
                        width 80%
                        margin 0 auto
                        margin-top 10px
                    .desc
                        color #f56a6d
                        text-align center
                        font-size 14px
                        margin 12px 0
                        padding 0 6px
                    .price
                        display flex
                        justify-content center
                        align-items center
                        margin-bottom 15px
                        .new
                            color #d06
                            font-size 16px
                            margin-right 5px
                        .old
                                color: #989898;
                                font-size: 14px;
                                text-decoration: line-through;
</style>