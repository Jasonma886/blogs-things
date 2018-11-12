<template>
  <div class="main">
    <div class="left-part">
      <router-view name="left"></router-view>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
  .main {
    display: flex;
    .left-part {
    }
    .contain {
      width: 85%;
      margin-top: 15px;
      margin-left: 10px;
    }
  }
</style>
