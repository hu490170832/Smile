<template>
    <div class="gooods-menu">
        <div class="menu-list">
            <div v-for="item in goodsList" :key="item.mallCategoryId" class="item">
                <img :src="item.image" alt="">
                <div class="title">{{item.mallCategoryName}}</div>
            </div>
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
        .item
            width 20%
            display flex
            align-items center
            flex-direction column
            padding 20px 0
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