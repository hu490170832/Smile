<template>
    <div class="content">
        <div class="sidebar" ref="sidebar">
            <div @click="chooseFruits" class="item active">全部</div>
            <div @click="chooseFruits" class="item">热带水果</div>
            <div @click="chooseFruits" class="item">时令水果</div>
            <div @click="chooseFruits" class="item">苹果/梨</div>
            <div @click="chooseFruits" class="item">柑橘橙柚</div>
        </div>
        <cube-scroll ref="scroll" class="fruits-list">
            <div class="scroll-container">
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
                <div class="item">
                    <img class="fruit-img" src="./fruit.jpg" alt="">
                    <div class="name">西班牙脐橙</div>
                    <div class="price">
                        <span class="real">￥15.00</span>
                        <span class="del">￥18.00</span>
                    </div>
                </div>
            </div>
        </cube-scroll>
    </div>
</template>

<script>
    import {
        SingleSelection
    } from '@/common/js/dom.js'
    export default {
        methods: {
            chooseFruits(e) {
                var el = e.target
                var siblings = this.$refs.sidebar.children
                SingleSelection(el, siblings, 'active') //单选
            }
        }
    }
</script>

<style lang='stylus' scoped>
.content
    display flex
    height 100%
    .sidebar
        width 22%
        border-right 1px solid #eaeaea
        height 100%
        .item
            border-bottom 1px solid #eaeaea
            height 40px
            line-height 40px
            text-align center
            &.active
                background #eee
    .fruits-list
        background #eee
        padding-top 5px
        flex 1
        padding 5px
        position relative
        .scroll-container
            display flex
            flex-wrap wrap
        .item
            background #fff
            display flex
            align-items center
            flex-direction column
            width 48%
            padding-bottom 30px
            box-sizing border-box
            margin-bottom 10px
            &:nth-of-type(2n-1)
                margin-right 10px
            .fruit-img
                width 80%
            .name
                margin-top 5px
                color #f56a6d
                font-size 14px
            .price
                margin-top 10px
                .real
                    color #d0644a
                    font-size 16px
                .del
                    color #989898
                    font-size 14px
                    text-decoration line-through
</style>