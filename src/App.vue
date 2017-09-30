<template>
  <div id="app">
    <router-view>
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
