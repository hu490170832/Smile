<template>
    <div class="slider">
        <cube-slide ref="slide" :data="items">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a href="">
                    <img class="img" :src="item.image">
                </a>
            </cube-slide-item>
            <template slot="dots" slot-scope="props">
                <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots">{{index + 1}}</span>
            </template>
        </cube-slide>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        url: 'images/1.jpg',
                        image: require('./images/1.jpg')
                    },
                    {
                        url: 'images/2.jpg',
                        image: require('./images/2.jpg')
                    },
                    {
                        url: 'images/3.jpg',
                        image: require('./images/3.jpg')
                    }
                ]
            }
        },
        methods: {
            imgonload() {
                console.log(1)
            }
        }
    }
</script>

<style scoped lang='stylus'>
    .slider
        overflow: hidden
        width: 100%
        height: 184px
        .my-dot
            width 10px
            height 10px
            border-radius 50%
            position relative
            top -5px
            margin-right 4px
            &.active
                background #327ae3
</style>