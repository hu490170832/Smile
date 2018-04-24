<template>
    <div class="serach">
        <div class="search-position">
            <span class="icon iconfont">&#xe633;</span>
        </div>
        <div class="search-input">
            <input type="text" placeholder="查找">
        </div>
        <div class="serach-button">
            <button>查找</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .serach
        height 88px
        background #d22e7d
        display flex
        .search-position 
            display flex
            width 20%
            align-items center
            justify-content center
            .icon
                color #ffffff
                font-size 28px
        .search-input
            input 
                background transparent 
                height 100%
</style>