<template>
    <div class="personal-header">
        <div class="left">
            <img src="./icon.png" alt="">
            <div class="desc">普通</div>
        </div>
        <div class="level">
            <div class="my-count">
                我的福豆:29 <img src="./icon-2.png" alt="">
            </div>
            <div class="level-count">
                <span class="item">1</span>
                <span class="item">2</span>
                <span class="item">3</span>
                <span class="item">4</span>
                <span class="item">5</span>
                
            </div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .personal-header
        height 110px
        padding 0 14px
        background linear-gradient(top, #d32d7f,#cd2b77)
        display flex
        .left
            display flex
            flex-direction column
            align-items center
            justify-content center
            width 20%
            img
                width 80%
            .desc
                width 90%
                height 24px
                margin-top 8px
                background #aa2e39
                border-radius 14px
                line-height 24px
                text-align center
                font-size 14px
                color #fff
                box-shadow 0px 2px 1px  #751222 inset
        .level
            display flex
            flex-direction column
            padding-top 15px
            margin-left 10px
            .my-count
                color #fff
                display flex
                align-items center
                img
                    width 20px
                    margin-left 4px
            .level-count
                display flex
                margin-top 24px
                .item
                    display inline-block
                    position relative
                    width 28px
                    height 28px
                    margin-right 11px
                    text-align center
                    line-height 30px
                    border-radius 50%
                    color #fff
                    font-size 18px
                    background #a53462
                    box-shadow 0px 2px 1px  #751222 inset
                    &:after
                        position absolute
                        content ''
                        display block
                        width 12px
                        height 6px
                        background #a53462
                        top 50%
                        right 0
                        transform translate(100%,-50%)
                        box-shadow 0px 2px 1px  #751222 inset
                    &:nth-last-of-type(1):after
                        display none

                    
</style>