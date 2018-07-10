<template>
    <div class="category">
        <div class="top-bar">
            <!-- <cube-scroll :options = 'options'> -->
                <div class="tab-list" ref="category">
                    <div class="item" 
                        @click="categoryClick" 
                        :class="{active: item.mallCategoryId==categoryId}"
                            v-for="item in category" 
                        :key="item.mallCategoryId"
                        :mallCategoryId = 'item.mallCategoryId'
                    >{{item.mallCategoryName}}</div>
                </div>
            <!-- </cube-scroll> -->
        </div>
        <div class="switch">
            <div class="sell-count">
                <div class="text">销量:</div>
                <cube-switch v-model="salesFlag" class="switch-btn">
                </cube-switch>
            </div>
            <div class="price">
                <div class="text">价格:</div>
                <span>高</span>
                <cube-switch v-model="priceFlag" class="switch-btn">
                </cube-switch>
                <span>低</span>
            </div>
        </div>
        <div class="content" v-if='hasData'>
            <div class="sidebar" ref="sidebar">
                <div @click="choosebxMallSubDto" ref='all' class="item active">全部</div>
                <div
                    @click="choosebxMallSubDto" 
                    v-for="item in sidebarData" 
                    :key="item.mallSubId"
                    :mallSubId='item.mallSubId' 
                    class="item"
                >{{item.mallSubName}}</div>
            </div>
            <cube-scroll ref="scroll" :data='goodsList' class="fruits-list" :class='{noData:nogoodsFlag}'>
                <div class="nogoods" v-if='nogoodsFlag'>
                    <img src="./images/2@2x.gif" alt="">
                </div>
                <div class="scroll-container"  v-else>
                    <router-link tag='div' :to="'/goodsDetail?goodsId='+item.goodsId" class="item" v-for="item in goodsList" :key="item.goodsId">
                        <img class="fruit-img" v-lazy="item.image" alt="">
                        <div class="name">{{item.goodsName}}</div>
                        <div class="price">
                            <span class="real">￥{{item.presentPrice}}</span>
                            <span class="del">￥{{item.oriPrice}}</span>
                        </div>
                    </router-link>
                </div>

            </cube-scroll>
        </div>
    </div>
</template>

<script>
    import Search from '@/common/components/search/search'
    import {getCategory,getMallGoods} from '@/api/category'
     import {
        SingleSelection,
        addClass,
        hasClass
    } from '@/common/js/dom.js'
    export default {
        data() {
            return {
                transitionName : 'slide-left',
                hasData: false,
                category: [],   //类别
                sidebarData: [],
                goodsList:[],
                categoryId: 1,
                defaultParams :{
                    categoryId: 1,  //category种类
                    page:1,
                    flag:22
                    // categorySubId: '' siderBar id
                },
                salesFlag: false,
                priceFlag: false,
                nogoodsFlag: false,
                options: {
                    scrollX: true
                }
            }
        },
        created() {
            this.showToast()
            getCategory().then((res)=>{
                this.category = res.data
                this.sidebarData = this.category[0].bxMallSubDto
                this.hasData = true
            })
            this._getMallGoods()
        },
        methods: {
            showToast() {
                this.toast = this.$createToast({
                    txt: 'Loading...',
                    mask: true
                })
                this.toast.show()
            },
            _getMallGoods(params) {
                this.showToast()
                Object.assign(this.defaultParams,params)
                getMallGoods(this.defaultParams).then((res)=>{
                    if(!res.data){
                        this.nogoodsFlag = true
                        this.toast.hide()
                        return
                    }
                    this.goodsList = res.data
                    this.toast.hide()
                    this.nogoodsFlag = false
                })
            },
            categoryClick(e) {
                var el = e.target
                var mallCategoryId = el.getAttribute('mallCategoryId')
                this.$router.push('/category?mallCategoryId='+mallCategoryId)
            },
            choosebxMallSubDto(e) {
                var el = e.target
                if(hasClass(el,'active') ){
                    return
                }
                var siblings = this.$refs.sidebar.children
                SingleSelection(el, siblings, 'active') //单选
                var categorySubId = el.getAttribute('mallSubId')
                this._getMallGoods({
                    categorySubId
                })
            }
        },
        components: {
            Search
        },
        watch:{
            $route(newRoute) {
                var categoryId = newRoute.query.mallCategoryId
                 if(!categoryId || this.categoryId == categoryId) {   //id相同不再请求数据
                    return
                }
                if(categoryId) {
                    this.categoryId =categoryId
                }
                for(let i=0;i<this.category.length;i++) {
                    if(this.category[i].mallCategoryId == categoryId) {
                        this.sidebarData = this.category[i].bxMallSubDto
                    }
                }
                var siblings = this.$refs.sidebar.children
                SingleSelection(this.$refs.all, siblings, 'active') //全部按钮选中
                this._getMallGoods({
                    categoryId,
                    categorySubId:null
                })
            },
            salesFlag(newValue) {   //价格switch
                if(newValue) {
                    Object.assign(this.defaultParams,{
                        flag:31
                    })
                    this.priceFlag = false
                    this._getMallGoods()
                }
                if(!this.priceFlag&&!newValue) {
                    Object.assign(this.defaultParams,{
                        flag:22
                    })
                    this._getMallGoods()
                }

            },
            priceFlag(newValue) {  //价格switch
                if(newValue) {
                    Object.assign(this.defaultParams,{
                        flag:21
                    })
                    this.salesFlag = false
                    this._getMallGoods()
                }
                if(!this.salesFlag&&!newValue) {
                    Object.assign(this.defaultParams,{
                        flag:22
                    })
                    this._getMallGoods()
                }
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .category
        padding-top 44px
        position absolute
        top 0
        left 0
        right 0
        bottom 50px
        overflow hidden
        .tab-list
            height 45px
            white-space nowrap
            .item
                text-align center
                line-height 45px
                font-size 14px
                box-sizing border-box
                border-bottom 1px solid #ccc
                padding 0 10px
                display inline-block
                &.active
                    border-bottom 2px solid #e2595b
        .switch
            display flex
            justify-content center
            height 38px
            line-height 38px
            border-bottom 1px solid #eee
            >>>.cube-switch-ui
                width 41px
                height 22px
                &::after
                    border-radius 50%
                    width 22px
                    height 22px
            .sell-count
                display flex
            .price
                display flex
                margin-left 20px
                span 
                    margin 0 3px
            .text
                margin-right 6px
        .content
            display flex
            position absolute
            top 127px
            bottom 0
            width 100%
            .sidebar
                width 22%
                border-right 1px solid #eaeaea
                height 100%
                font-size 14px
                .item
                    border-bottom 1px solid #eaeaea
                    height 40px
                    line-height 40px
                    text-align center
                    &.active
                        background #eee
            .fruits-list
                background #eee
                padding-top 5px
                padding 5px
                position relative
                flex 1
                .nogoods
                    img
                        width 100%
                        margin 0 auto
                        display block
                        margin-top 100px
                .scroll-container
                    display flex
                    flex-wrap wrap
                .item
                    background #fff
                    display flex
                    align-items center
                    flex-direction column
                    width 48%
                    padding-bottom 30px
                    padding-top 15px
                    box-sizing border-box
                    margin-bottom 10px
                    height 200px
                    &:nth-of-type(2n-1)
                        margin-right 10px
                    .fruit-img
                        width 80%
                    .name
                        margin-top 5px
                        padding 0 5px
                        color #f56a6d
                        font-size 14px
                        text-align center
                    .price
                        margin-top 10px
                        .real
                            color #d0644a
                            font-size 16px
                        .del
                            color #989898
                            font-size 14px
                            text-decoration line-through
                &.noData
                    background #fff




    .view-container
        position relative
    .slide-left-enter-active,.slide-left-leave-active 
        transition: transform .5s;
    .slide-left-enter
        transform: translateX(-100%)
    .slide-left-leave-to
        transform translateX(100%)
    .slide-right-enter-active,.slide-right-leave-active 
        transition: transform .5s;
    .slide-right-enter
        transform: translateX(100%)
    .slide-right-leave-to
        transform: translateX(-100%)
    
</style>