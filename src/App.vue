<template>
  <div id="app">
    <router-view/>
    <tab />
  </div>
</template>

<script>
import tab from './common/components/tab'
export default {
  name: 'App',
  components:{
    tab
  }
}
</script>

<style lang='stylus'>
  #app
    padding-bottom 50px
  
</style>
