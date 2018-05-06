<template>
    <div class="personal">
        <top-bar />
        <div class="myorder">
            <div class="lookAll">
                <div class="left">我的订单</div>
                <div class="right">查看全部订单</div>
            </div>
            <div class="orderStatus">
                <div class="item">
                    <div class="icon iconfont">&#xe601;</div>
                    <div class="desc">待付款</div>
                </div>
                <div class="item">
                    <div class="icon iconfont">&#xe600;</div>
                    <div class="desc">待配送</div>
                </div>
                <div class="item">
                    <div class="icon iconfont">&#xe659;</div>
                    <div class="desc">配送中</div>
                </div>
                <div class="item">
                    <div class="icon iconfont">&#xe60b;</div>
                    <div class="desc">带评价</div>
                </div>
            </div>
        </div>
        <div class="my-list">
            <div class="item">
                <div class="icon icon1 iconfont">&#xe688;</div>
                <div class="btn">
                    <span class="desc">客服电话</span>
                    <span class="arrow iconfont">&#xe62e;</span>
                </div>
            </div>
            <div class="item">
                <div class="icon icon2 iconfont">&#xe663;</div>
                <div class="btn">
                    <span class="desc">福利包包</span>
                    <span class="arrow iconfont">&#xe62e;</span>
                </div>
            </div>
            <div class="item">
                <div class="icon icon3 iconfont">&#xe608;</div>
                <div class="btn">
                    <span class="desc">关于我们</span>
                    <span class="arrow iconfont">&#xe62e;</span>
                </div>
            </div>
            <div class="item">
                <div class="icon icon4 iconfont">&#xe6bb;</div>
                <div class="btn">
                    <span class="desc">找回密码</span>
                    <span class="arrow iconfont">&#xe62e;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import topBar from './components/topbar'
    export default {
        components: {
            topBar
        }
    }
</script>

<style lang='stylus' scoped>
    .personal
        background #efefef
        .myorder
            margin-top 10px
            background #fff
            .lookAll
                border-bottom 1px solid #ddd
                display flex
                justify-content space-between
                height 40px
                line-height 40px
                padding 8px
                .left
                    color #6c6c6c
                .right
                    color #b3b3b3
            .orderStatus
                display flex
                margin-bottom 10px
                .item
                    display flex
                    width 25%
                    flex-direction column
                    padding 20px 0
                    text-align center
                    .icon
                        font-size 30px
                        color #bdbdbd
                        margin-bottom 10px
        .my-list
            display flex
            flex-direction column
            background #fff    
            .item
                display flex
                align-items center
                height 60px
                padding 0 20px
                .icon
                    width 40px
                    height 40px
                    border-radius 50%
                    color #fff
                    text-align center
                    line-height 40px
                    font-size 26px
                    margin-right 20px
                    &.icon1
                        background #fae316
                    &.icon2
                        background #e7252c
                    &.icon3
                        background #1d99ff
                    &.icon4
                        background #ee3071
                .btn
                    border-bottom 1px solid #ddd
                    flex 1
                    height 100%
                    box-sizing border-box
                    display flex
                    align-items center
                    justify-content space-between
                    .arrow
                        font-size 20px
                        color #d5d5d5


</style>