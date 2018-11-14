<template>
  <div class="blog">
    <h2 class="title">{{content.title}}</h2>
    <p>查看原文：点击<a :href="content.origin" target="_blank">这里</a></p>
    <p class="content" v-html="formatCode(content.content)"></p>
    <BackTop></BackTop>
  </div>
</template>

<script>
import {getBlogById} from '@/api/fetch'

export default {
  name: '',
  data () {
    return {
      content: {}
    }
  },
  created () {
    let id = this.$route.params.id || 1
    getBlogById({blogId: id}).then(res => {
      if (res.code === 0) {
        this.content = res.data
      }
    })
  },
  methods: {
    formatCode (code = '') {
      return code.replace(/\n/g, '<br>')
    }
  }
}
</script>

<style lang="less" scoped>
.blog {
  text-align: left;
  width: 80%;
  margin: auto;
  .title {
    text-align: center;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
  }
  .content {
    color: #2f2f2f;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    white-space: pre-wrap;
  }
}
</style>
