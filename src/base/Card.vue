<template>
  <div class="card">
    <a @click="readDetail" class="title">{{title}}</a>
    <p class="content">{{content}}</p>
    <i class="tips"><Icon type="ios-contact" /> {{author}}</i>
    <i class="tips"><Icon type="ios-calendar-outline" /> {{commitTime}}</i>
    <i class="tips"><Icon type="ios-eye" /> {{clicked}}</i>
    <i class="tips"><Icon type="ios-chatboxes" /> {{comments || 0}}</i>
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
    },
    clicked: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
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
    margin-bottom: 10px;
  }
  .tips {
    margin-right: 8px;
  }
}
</style>
