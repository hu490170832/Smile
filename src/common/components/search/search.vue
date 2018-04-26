<template>
    <div class="serach">
        <div class="search-position">
            <span class="icon iconfont">&#xe633;</span>
        </div>
        <div class="search-input border-bottom-1px">
            <input type="text" placeholder="查找">
        </div>
        <div class="serach-button">
            <!-- <button>查找</button> -->
            <cube-button>查找</cube-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .cube-btn
        border-radius 10px
        padding 8px 28px
    .serach
        height 44px
        background #d22e7d
        display flex
        align-items center
        .search-position 
            display flex
            width 20%
            align-items center
            justify-content center
            .icon
                color #ffffff
                font-size 28px
        .search-input
            flex 1
            margin-bottom 10px;
            height 100%
            input 
                background transparent 
                height 100%
                padding-left 10px
                color #fff
                &::placeholder
                    color #ff83c8
        .serach-button
            width 25%
            margin-right 10px
            margin-left 10px
</style>