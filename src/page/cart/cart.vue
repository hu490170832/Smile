<template>
    <div class="cart">
        <div class="title">购物车</div>
        <div class="cart-container">
            <cube-scroll ref='scroll'>
                <div class="nogoods" v-show="goodsList.length==0">
                    <div class="icon-box">
                        <span class="icon iconfont">&#xe64f;</span>
                    </div>
                    <div class="desc">亲，购物车空空如也，快去逛逛！</div>
                    <router-link tag="div" to='/shoppingMall' class="btn">
                        <red-btn btnName='去购物'></red-btn>
                    </router-link>
                </div>
                <div class="hasgoods" v-show="goodsList.length">
                    <div class="goods-list">
                        <div class="item" v-for="(item,index) in goodsList" :key="item.goodsId">
                            <cube-checkbox :option='option' v-model="item.checked" shape='square' class="checkbox" :hollow-style='false'></cube-checkbox>
                            <div class="goods-img">
                                <img :src="item.image1" alt="">
                            </div>
                            <div class="goods-info">
                                <div class="desc">{{item.goodsName}}</div>
                                <div class="price">￥{{item.presentPrice.toFixed(2)}}</div>
                            </div>
                            <div class="goodsNum">
                                <div @click="subNum(index,item.num)" class="subBtn iconfont">&#xe646;</div>
                                <div class="num">{{item.num}}</div>
                                <div @click="addNum(index,item.num)" class="addBtn iconfont">&#xe60d;</div>
                            </div>
                        </div>
                    </div>
                    <div class="total">
                        <div class="top">
                            <div class="check-all" @click="checkAll">
                                <cube-checkbox :option='optionAll' v-model="checked" shape='square' class="checkbox" :hollow-style='false'></cube-checkbox>
                            </div>
                            <div class="total-price">
                                <div class="price">合计: ￥{{totalPrice.toFixed(2)}}</div>
                                <div class="delivery">配送费:3元 (满59.00免配送费)</div>
                            </div>
                        </div>
                        <div class="bottom-btn">
                            <white-btn class="clear-car" @click.native="clearAll" btnName='清空购物车'></white-btn>
                            <red-btn class="pay" btnName='结算' ></red-btn>
                        </div>
                    </div>
                </div>
                <div class="recommend">
                    <div class="recommend-title">为您推荐</div>
                    <div class="car-recommend">
                        <div class="recommend-list">
                            <router-link :to="'/goodsDetail?goodsId='+item.goodsId" class="item" v-for="item in recommendList" :key="item.goodsId">
                                <img :src="item.image" alt="">
                                <div class="name">{{item.goodsName}}</div>
                                <div class="price">
                                    <span class="present-price">￥{{item.mallPrice.toFixed(2)}}</span>
                                    <div class="orgin-price">￥{{item.price.toFixed(2)}}</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
    import redBtn from '@/common/components/btn/red-btn'
    import whiteBtn from '@/common/components/btn/white-btn'
    import {getGoodsList,changeGoodNum,subGoods,clearGoodsList} from '@/common/js/cache'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                goodsList: [],
                checked: true,
                option: {
                    label: '',
                    value: '',
                    disabled: false
                },
                optionAll: {
                    label: '取消',
                    value: '',
                    disabled: false
                }
            }
        },
        computed: {
            totalPrice() {
                var allPrice = 0
                this.goodsList.forEach((item)=>{
                    if(item.checked) {
                        allPrice+=item.presentPrice*item.num
                    }
                })
                return allPrice
            },
            ...mapState(['recommendList'])
        },
        methods: {
            cancel(e) {
                console.log(e)
            },
            subNum(index,value) {
                if(value>1) {
                    this.$set(this.goodsList[index],'num',value-1)
                    changeGoodNum(index,value-1)
                }else {
                    this.goodsList.splice(index,1)
                    subGoods(index)
                }
            },
            addNum(index,value) {
                this.$set(this.goodsList[index],'num',value+1)
                changeGoodNum(index,value+1)
            },
            checkAll() {
                setTimeout(()=>{
                    this.goodsList.map((item)=>{
                        item.checked = this.checked
                    })
                },30)
            },
            clearAll() {
                this.goodsList = []
                clearGoodsList()
            }
        },
        activated() {
            var goodsList = getGoodsList()
            this.goodsList = goodsList
            this.$nextTick(()=>{
                this.$refs.scroll.refresh()
            })
        },
        components: {
            redBtn,
            whiteBtn
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
            box-sizing border-box
        .cart-container
            position absolute
            top 40px
            bottom 0
            width 100%
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
            .hasgoods
                background #fff
                .goods-list
                    .item
                        display flex
                        position relative
                        box-sizing border-box
                        padding 20px 35px 30px 60px
                        border-bottom 1px solid #eee
                        .goods-img
                            width 80px
                            border 2px solid #eee
                            padding 6px 0
                            img
                                width 100%
                        .goods-info
                            margin-left 20px
                            color #ff5252
                            display flex
                            flex-direction column
                            justify-content space-between
                            padding 8px 0
                            .price
                                color #ff3d00
                        .checkbox
                            font-size 110%
                            position absolute
                            left 0px
                            top 12px
                        .goodsNum
                            position absolute
                            right 14px
                            bottom 22px
                            font-size 25px
                            color #757575
                            display flex
                            align-items center
                            .addBtn,.subBtn
                                font-size 28px
                            .num
                                margin 0 14px
                .total
                    padding-bottom 10px
                    .top
                        display flex
                        .check-all
                            font-size 110%
                            >>>.cube-checkbox-label
                                font-size 16px
                        .total-price
                            .price
                                height 45px
                                line-height 45px
                                color #ff3d00
                            .delivery
                                margin-top -10px
                                color #2c3e50
                    .bottom-btn
                        display flex
                        margin-right 15px
                        justify-content flex-end
                        margin-top 16px
                        .pay
                            margin-left 8px
            .recommend
                background #efefef
                .recommend-title
                    text-align center
                    height 40px
                    line-height 40px
                    color #747474
                .recommend-list
                    margin 0 2px
                    display flex
                    flex-wrap wrap
                    justify-content space-between
                    .item
                        display flex
                        flex-direction column
                        width 49%
                        border-radius 2px
                        background #fff
                        margin-bottom 6px
                        padding-bottom 20px
                        padding-top 10px
                        img
                            width 80%
                            margin 0 auto
                        .name
                            color #ff5252
                            padding 0 10px
                            text-align center
                            margin-top 4px
                        .price
                            display flex
                            justify-content center
                            margin-top 4px
                            .present-price
                                color #ff5252
                                margin-right 4px
                            .orgin-price
                                font-size 14px
                                color #989898
                                text-decoration line-through
                
 
</style>