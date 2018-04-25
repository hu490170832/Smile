<template>
    <div class="recommend">
        <div class="title">商品推荐</div>
        <div class="recommend-list">
            <div class="item">
                <img src="./images/recommend-1.jpg" alt="">
                <div class="price">
                    <span class="real-price">￥2.70</span>
                    <span class="del-price">￥2.70</span>
                </div>
            </div>
            <div class="item">
                <img src="./images/recommend-2.jpg" alt="">
                <div class="price">
                    <span class="real-price">￥16.80</span>
                    <span class="del-price">￥16.80</span>
                </div>
            </div>
            <div class="item">
                <img src="./images/recommend-3.jpg" alt="">
                <div class="price">
                    <span class="real-price">￥9.50</span>
                    <span class="del-price">￥9.50</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .recommend
        background #fff
        margin-bottom 20px
        .title
            color #dd574f
            font-size 16px
            height 36px
            line-height 36px
            padding-left 8px
        .recommend-list
            display flex
            .item
                flex 1
                box-sizing border-box
                display flex
                flex-direction column
                align-items center
                border-right 1px solid #ececec
                border-top 1px solid #ececec
                padding-top 20px
                img
                    width 80%
                .price
                    padding-bottom 5px
                    span 
                        display block
                        text-align center
                    .del-price
                        text-decoration line-through
                        font-size 13px
                        color #ccc
                        margin-top 2px
                        
</style>