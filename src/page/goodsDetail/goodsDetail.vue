<template>
    <div class="goods-detail">
        <div class="header">
            <div @click="back" class="back">
                <span class="icon iconfont">&#xe64b;</span>
                <span class="desc">返回</span>
            </div>
            <div class="title">商品详情</div>
        </div>
        <cube-scroll ref="scroll" class="goods-content" v-if="hasData">
            <div class="imgBox"><img class="img" :src="detailData.goodInfo.image1" alt=""></div>
            <div class="goods-desc">
                <div class="name">{{detailData.goodInfo.goodsName}}</div>
                <div class="goods-id"><span class="desc">编号:</span><span class="num">{{detailData.goodInfo.goodsSerialNumber}}</span></div>
                <div class="price">
                    <span class="presentPrice">￥{{presentPrice(detailData.goodInfo.presentPrice)}}</span>
                    <span class="oriPrice">市场价￥ {{detailData.goodInfo.oriPrice}}</span>
                </div>
            </div>
            <div class="goods-introduce">
                <span>说明:</span> ><span>极速送达</span> ><span>正品保障</span>
            </div>
            <div class="goods-orderDetail">
                <div class="tab" ref="tab">
                    <div @click="tabClick" name='detail' class="detailBtn active">详情</div>
                    <div @click="tabClick" class="commentBtn">评价</div>
                </div>
                <div class="detail" ref="goodsDetail" v-show="showDetail" v-html="detailData.goodInfo.goodsDetail"></div>
                <div class="comment" v-show='!showDetail'>
                    <img :src="detailData.advertesPicture.PICTURE_ADDRESS" alt="">
                </div>
            </div>
        </cube-scroll>
        <div class="footer">
            <div class="left">
                <span class="desc">数量</span>
                <span @click="subNum" class="icon iconfont">&#xe646;</span>
                <span class="num">{{num}}</span>
                <span @click="addNum" class="icon iconfont">&#xe60d;</span>
            </div>
            <div class="right">
                <div @click="addCart" class="btn1 btn">加购物车</div>
                <div class="btn2 btn">店铺休息</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getGoodsDetail} from '@/api/goodsDetail'
    import {SingleSelection } from '@/common/js/dom'
    import {addGoods} from '@/common/js/cache'
    export default {
        data() {
            return {
                hasData: false,
                showDetail: true,
                num:1
            }
        },
        created() {
            this._getGoodsDetail()
        },
        methods: {
            showToast() {
                this.toast = this.$createToast({
                    txt: 'Loading...',
                    mask: true
                })
                this.toast.show()
            },
            presentPrice(value) {
                value+=''
                if(value.indexOf('.00')==-1) {
                    return value+'.00'
                }

            },
            back() {
                this.$router.go(-1)
            },
            _getGoodsDetail() {
                var goodId = this.$route.query.goodsId
                this.showToast()
                getGoodsDetail(goodId).then((res)=>{
                    this.detailData = res.data
                    this.hasData = true
                    this.toast.hide()
                    this.refreshScroll()
                    console.log(res.data)
                })
            },
            refreshScroll() {
                setTimeout(()=>{
                    var imgEl = this.$refs.goodsDetail.querySelectorAll('img')
                    var that = this
                    for(var i=0;i<imgEl.length;i++) {
                        imgEl[i].onload = function() {
                            if(!that.$refs.scroll) {
                                return
                            }
                            that.$refs.scroll.refresh()
                        }
                    }
                },30)
                
            },
            addNum() {
                this.num++
            },
            subNum() {
                if(this.num>1) {
                    this.num--
                }
            },
            addCart() {
                if(!this.detailData) {
                    return
                }
                var goodsInfo = this.detailData.goodInfo
                addGoods(goodsInfo)
                this.$router.push('/cart')
            },
            tabClick(e) {
                var el = e.target
                var siblings = this.$refs.tab.children
                var name = el.getAttribute('name')
                SingleSelection(el,siblings,'active')
                if(name=='detail') {
                    this.showDetail = true
                }else {
                    this.showDetail = false
                }
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .goods-detail
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 100
        background #eee
    .header
        position fixed
        top 0
        width 100%
        height 40px
        line-height 40px
        position relative
        text-align center
        border-bottom 2px solid #ccc
        box-sizing border-box
        background #fff
        .back
            position absolute
            left 0
            padding-left 10px
            height 100%
            line-height 30px
            .icon
                margin-right 4px
                font-weight 600
            .desc
                font-size 14px
                position relative
                top -1px
    .goods-content
        position absolute
        left 0
        right 0
        top 40px
        bottom 50px
        height auto
        .imgBox
            width 100%
            height 380px
            background #fff
            img
                width 100%
        .goods-desc
            background #fff
            display flex
            flex-direction column
            padding 0 10px
            padding-top 10px
            line-height 35px
            .name
                color #3b3b3b
            .goods-id
                .desc
                    color #ccc
                .num
                    color #f6446f
            .price
                .presentPrice
                    color #fa0a00
                    font-weight 600
                    margin-right 5px
                .oriPrice
                    color #6a6a6a
                    text-decoration line-through
        .goods-introduce
            background #fff
            color #f25010
            height 40px
            line-height 40px
            border-top 8px solid #eee
            border-bottom 8px solid #eee
            padding 0 10px
            span:nth-of-type(1) 
                margin-right 10px
        .goods-orderDetail
            .tab
                background #fff
                display flex
                div
                    width 50%
                    box-sizing border-box
                    height 54px
                    line-height 54px
                    text-align center
                    &.active
                        border-bottom 2px solid #ff493b
                        background rgba(240,240,240,.3)
            .comment
                img
                    width 100%
    .footer
        height 60px
        position fixed
        display flex
        align-items center
        justify-content space-between
        padding 0 20px
        bottom 0
        width 100%
        background #fff
        z-index 100
        border-top 1px solid #ccc
        box-sizing border-box
        .left
            display flex
            align-items center
            .desc
                margin-right 10px
            .icon
                color #757575
                font-size 24px
                margin 0 10px
            .num
                color #757575
        .right
            display flex
            height 100%
            align-items center
            .btn
                padding 0 5px
                height 40px
                line-height 40px
            .btn1
                color #4c4c4f
                border 1px solid #ddd
                box-shadow 0 0 6px #ddd
                border-radius 2px
                margin-right 6px
            .btn2
                background #e6e6e6
                color #b4b4b4
                border-radius 2px

</style>