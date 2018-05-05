<template>
    <div class="shoppingMall">
        <search />
        <div class="scroll-container">
            <cube-scroll v-if="hasData">
                <banner :data='indexData.slides'></banner>
                <goods-menu :advertesPicture='indexData.advertesPicture' :goodsList='indexData.category'></goods-menu>
                <recommend :recommend='indexData.recommend'
                            :floorName='indexData.floorName' 
                            :floor1='indexData.floor1' 
                            :floor2='indexData.floor2' 
                            :floor3='indexData.floor3'
                            :hotGoods='indexData.hotGoods'>
                </recommend>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
    import Search from '@/common/components/search/search'
    import Banner from './components/banner/banner'
    import goodsMenu from './components/goods-menu/goods-menu'
    import recommend from './components/recommend/recommend'
    import {getIndexData} from '@/api/shoppingMall.js'
    export default {
        data() {
            return {
                hasData: false
            }
        },
        created() {
            getIndexData().then((res)=>{
                this.hasData = true
                this.indexData = res.data
                console.log(res.data)
            })
        },
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