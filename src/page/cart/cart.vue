<template>
    <div class="cart">
        <div class="title">购物车</div>
        <div class="nogoods">
            <div class="icon-box">
                <span class="icon iconfont">&#xe64f;</span>
            </div>
            <div class="desc">亲，购物车空空如也，快去逛逛！</div>
            <router-link tag="div" to='/shoppingMall' class="btn">去购物</router-link>
        </div>
        <div class="recommend">
            为您推荐
        </div>
    </div>
</template>

<script>
    export default {
        
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
 
</style>