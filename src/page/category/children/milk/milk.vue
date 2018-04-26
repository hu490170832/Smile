<template>
    <div class="milk">
        <v-content />
    </div>
</template>

<script>
    import content from '../components/content'
    export default {
        components: {
            'v-content':content,
        }
    }
</script>

<style lang='stylus' scoped>
@import "~@/assets/css/mixins";
    .milk
        category-container()
</style>