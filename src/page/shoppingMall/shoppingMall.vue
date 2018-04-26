<template>
    <div class="shoppingMall">
        <search />
        <div class="scroll-container">
            <cube-scroll>
                <banner></banner>
                <goods-menu></goods-menu>
                <recommend></recommend>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
    import Search from '@/common/components/search/search'
    import Banner from './components/banner/banner'
    import goodsMenu from './components/goods-menu/goods-menu'
    import recommend from './components/recommend/recommend'
    export default {
        components: {
            Banner,
            goodsMenu,
            recommend,
            Search
        }
    }
</script>

<style lang= 'stylus' scoped>
    .shoppingMall
        position absolute
        top 0
        bottom 50px
        width 100%
        background #eee
        .scroll-container
            position absolute
            top 44px
            bottom 0
            width 100%
</style>