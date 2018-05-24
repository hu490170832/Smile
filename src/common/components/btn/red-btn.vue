<template>
    <div class="red-btn">
        {{btnName}}
    </div>
</template>

<script>
    export default {
        props:['btnName']
    }
</script>

<style lang='stylus' scoped>
    .red-btn
        padding 10px 20px
        background #fe5352
        color #fff
        border-radius 2px
        font-size 14px
        box-shadow 0 0 10px rgba(0,0,0,.3)
</style>