<template>
    <div class="top-bar">
        <div class="tab-list">
            <router-link tag="div" to='/category/fruits' class="item">新鲜水果</router-link>
            <router-link tag="div" to='/category/wine' class="item">中外名酒</router-link>
            <router-link tag="div" to='/category/milk' class="item">营养奶品</router-link>
            <router-link tag="div" to='/category/drinks' class="item">食品饮料</router-link>
            <router-link tag="div" to='/category/cosmetics' class="item">个人护理</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .tab-list
        display flex
        height 45px
        .item
            width 20%
            text-align center
            line-height 45px
            font-size 14px
            box-sizing border-box
            border-bottom 1px solid #ccc
            &.router-link-active
                border-bottom 2px solid #e2595b
</style>