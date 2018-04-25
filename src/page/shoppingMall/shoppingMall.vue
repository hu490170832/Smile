<template>
    <div class="shoppingMall">
        <search></search>
        <banner></banner>
        <goods-menu></goods-menu>
        <recommend></recommend>
    </div>
</template>

<script>
    import Search from './components/search/search'
    import Banner from './components/banner/banner'
    import goodsMenu from './components/goods-menu/goods-menu'
    import recommend from './components/recommend/recommend'
    export default {
        components: {
            Search,
            Banner,
            goodsMenu,
            recommend
        }
    }
</script>

<style lang= 'stylus' scoped>
    .shoppingMall
        background #eee
</style>