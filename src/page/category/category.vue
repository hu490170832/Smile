<template>
    <div class="category">
        <search />
        <top-bar />
        <switch-bar />
        <transition :name="transitionName" class="view-container">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import Search from '@/common/components/search/search'
    import topBar from './components/top-bar/top-bar.vue'
    import switchBar from './components/switch-bar/switch-bar'
    export default {
        data() {
            return {
                transitionName : 'slide-left'
            }
        },
        components: {
            topBar,
            switchBar,
            Search
        },
        watch:{
            $route(newRoute,oldRoute) {
                console.log(newRoute.meta.index)
                console.log(oldRoute.meta.index)
                this.transitionName = newRoute.meta.index<oldRoute.meta.index ? 'slide-left' : 'slide-right'
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .category
        position absolute
        top 0
        left 0
        right 0
        bottom 50px
        overflow hidden
    .view-container
        position relative
    .slide-left-enter-active,.slide-left-leave-active 
        transition: transform .5s;
    .slide-left-enter
        transform: translateX(-100%)
    .slide-left-leave-to
        transform translateX(100%)
    .slide-right-enter-active,.slide-right-leave-active 
        transition: transform .5s;
    .slide-right-enter
        transform: translateX(100%)
    .slide-right-leave-to
        transform: translateX(-100%)
    
</style>