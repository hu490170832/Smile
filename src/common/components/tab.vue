<template>
    <div class="tab">
        <router-link to='/' class="item">
            <div class="icon iconfont">&#xe630;</div>
            <div class="desc">商场</div>
        </router-link>
        <router-link to="/category" class="item">
            <div class="icon iconfont">&#xe60a;</div>
            <div class="desc">分类</div>
        </router-link>
        <router-link to="/cart" class="item">
            <div class="icon iconfont">&#xe600;</div>
            <div class="desc">购物车</div>
        </router-link>
        <router-link to="/personal" class="item">
            <div class="icon iconfont">&#xe606;</div>
            <div class="desc">会员中心</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .tab
        height 50px
        display flex
        border-top 1px solid #d7d7d7
        position fixed
        bottom 0
        width 100%
        .item
            flex 1
            display flex
            align-items center
            justify-content center
            flex-direction column
            color #7d868d
            font-size 14px
            &.router-link-exact-active
                color #d32e7d
            .icon
                font-size 22px
                margin-bottom 4px
</style>