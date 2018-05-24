<template>
    <div class="white-btn">
        {{btnName}}
    </div>
</template>

<script>
    export default {
        props:['btnName']
    }
</script>

<style lang='stylus' scoped>
    .white-btn
        padding 10px 20px
        background #fff
        color #333
        border-radius 2px
        font-size 14px
        box-shadow 0 0 10px rgba(0,0,0,.3)
</style>