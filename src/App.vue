<template>
  <div id="app">
    <div class="wrap">
      <router-view name="head"></router-view>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin: auto;
  background: #ddd;
  .wrap {
    background: #eee;
    padding: 1px;
  }
}
</style>
