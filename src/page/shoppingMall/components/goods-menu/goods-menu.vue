<template>
    <div class="gooods-menu">
        <div class="menu-list">
            <router-link :to="'/category?mallCategoryId='+item.mallCategoryId" v-for="item in goodsList" :key="item.mallCategoryId" class="item">
                <img v-lazy="item.image" alt="">
                <div class="title">{{item.mallCategoryName}}</div>
            </router-link>
        </div>
        <div class="tips">
            <img :src="advertesPicture.PICTURE_ADDRESS" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props:['goodsList','advertesPicture'],
        created() {
        }
    }
</script>

<style lang='stylus' scoped>
    .gooods-menu
        margin-top 10px
        border-radius 10px
    .menu-list
        background #ffffff
        display flex
        width 98%
        margin 0 auto 
        flex-wrap wrap
        padding-bottom 20px
        .item
            width 20%
            display flex
            align-items center
            flex-direction column
            padding-top 20px
            img 
                width 60%
            .title
                margin-top 5px
                font-size 14px
    .tips
        padding 10px 10px
        img
            width 100%
        
</style>