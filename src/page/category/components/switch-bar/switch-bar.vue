<template>
    <div class="switch">
        <div class="sell-count">
            <div class="text">销量:</div>
            <cube-switch class="switch-btn">
            </cube-switch>
        </div>
        <div class="price">
            <div class="text">价格:</div>
            <span>高</span>
            <cube-switch class="switch-btn">
            </cube-switch>
            <span>低</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
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
</style>