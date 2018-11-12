<template>
  <div class="card">
    <a @click="readDetail" class="title">{{title}}</a>
    <p class="content">{{content}}</p>
    <i>{{author}}</i>
    <i>{{commitTime}}</i>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String
    },
    author: {
      type: String
    },
    content: {
      type: String
    },
    commitTime: {
      type: String
    }
  },
  methods: {
    readDetail () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  margin: 10px;
  text-align: left;
  border: 1px solid #efefef;
  padding: 10px;
  .title {
    font-size: 18px;
    font-weight: 700;
    display: block;
    line-height: 1.5;
  }
  .content {

  }
}
</style>
