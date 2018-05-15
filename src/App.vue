<template>
  <div id="app" @touchmove.prevent>
    
    <keep-alive>
      <router-view name="search"></router-view>
    </keep-alive>

    <keep-alive>
			<router-view v-if="!$route.meta.noKeepAlive"></router-view>
		</keep-alive>

		<router-view v-if="$route.meta.noKeepAlive"></router-view>
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
