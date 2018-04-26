<template>
  <div id="app" @touchmove.prevent>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab />
  </div>
</template>

<script>
import tab from './common/components/tab/tab'
export default {
  name: 'App',
  components:{
    tab,
  }
}
</script>

<style lang='stylus'>
  
</style>
