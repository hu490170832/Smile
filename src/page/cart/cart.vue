<template>
    <div class="cart">
        <div class="title">购物车</div>
        <div class="nogoods" v-show="goodsList.length==0">
            <div class="icon-box">
                <span class="icon iconfont">&#xe64f;</span>
            </div>
            <div class="desc">亲，购物车空空如也，快去逛逛！</div>
            <router-link tag="div" to='/shoppingMall' class="btn">去购物</router-link>
        </div>
        <div class="hasgoods" v-show="goodsList.length">
            <div class="goods-list">
                <div class="item" v-for="item in goodsList" :key="item.goodsId">
                    <cube-checkbox :option='option' :value='true' shape='square' class="checkbox" :hollow-style='false'></cube-checkbox>
                    <div class="goods-img">
                        <img :src="item.image1" alt="">
                    </div>
                    <div class="goods-info">
                        <div class="desc">{{item.goodsName}}</div>
                        <div class="price">{{item.presentPrice}}</div>
                    </div>
                    <div class="goodsNum">
                        <div class="addBtn"></div>
                        <div class="subBtn"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommend">
            为您推荐
        </div>
    </div>
</template>

<script>
    import {getGoodsList} from '@/common/js/cache'
    export default {
        data() {
            return {
                goodsList: [],
                checked: 'checked',
                option: {
                    label: '',
                    value: '',
                    disabled: false
                }
                
            }
        },
        methods: {
            cancel(e) {
                console.log(e)
            }
        },
        activated() {
            var goodsList = getGoodsList()
            this.goodsList = goodsList
            console.log(this.goodsList)
        }
    }
</script>

<style lang='stylus' scoped>
    .cart
        position absolute
        top 0
        bottom 50px
        width 100%
        background #efefef
        .title
            height 40px
            text-align center
            line-height 40px
            background #fff
            border-bottom 1px solid #cecece
            color #555555
        .nogoods
            background #fff
            display flex
            flex-direction column
            align-items center
            padding-bottom 20px
            .icon-box
                width 90px
                height 90px
                margin-top 5px
                margin-bottom 20px
                border-radius 50%
                background #eee
                line-height 90px
                text-align center
                .icon
                    color #bdbdbd
                    font-size 60px
            .desc
                color #979797
                font-size 16px
                margin-bottom 20px
            .btn
                padding 10px 20px
                background #fe5352
                color #fff
                border-radius 2px
                font-size 14px
                box-shadow 0 0 3px #e46060
        .recommend
            text-align center
            color #747474
            height 40px
            line-height 40px
        .hasgoods
            background #fff
            .goods-list
                .item
                    display flex
                    justify-content center
                    position relative
                    box-sizing border-box
                    padding 20px 35px 20px 40px
                    .goods-img
                        width 80px
                        border 2px solid #eee
                        padding 6px 0
                        img
                            width 100%
                    .checkbox
                        font-size 30px
                        position absolute
                    .goodsNum
                        position absolute


 
</style>