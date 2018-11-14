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
    width: 85%;
    margin: 80px auto 100px;
    min-height: 80vh;
    background-color: #fff;
    .left-part {
    }
    .contain {
      width: 85%;
      padding: 20px;
    }
  }
</style>
