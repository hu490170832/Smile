<template>
    <div class="gooods-menu">
        <div class="menu-list">
            <div class="item">
                <img src="./images/menu-1.png" alt="">
                <div class="title">新鲜水果</div>
            </div>
            <div class="item">
                <img src="./images/menu-2.png" alt="">
                <div class="title">中外名酒</div>
            </div>
            <div class="item">
                <img src="./images/menu-3.png" alt="">
                <div class="title">营养奶瓶</div>
            </div>
            <div class="item">
                <img src="./images/menu-4.png" alt="">
                <div class="title">食品饮料</div>
            </div>
            <div class="item">
                <img src="./images/menu-5.png" alt="">
                <div class="title">个人护理</div>
            </div>
        </div>
        <div class="tips">
            <div class="left">
                <img class="left-img" src="./images/tips.png" alt="">
            </div>
            <div class="right">
                <img class="right-img" src="./images/car.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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
                font-size 16px
    .tips
        padding 10px 10px
        display flex
        align-items center
        .left 
            flex 1
            margin-right 10px
        .right
            width 14%
        .left-img,.right-img
            width 100%
        
</style>