<template>
  <div class="blog">
    <h2 class="title">{{content.title}}</h2>
    <div class="actions">
      <span class="tips"><Icon type="ios-contact" /> {{content.author}}</span>
      <span class="tips"><Icon type="ios-calendar-outline" /> {{content.commitTime}}</span>
      <span class="tips">查看原文：点击<a :href="content.origin" target="_blank">这里</a></span>
      <span class="tips"><Icon type="ios-eye" /> {{content.clicked}}</span>
      <span class="tips pointer" v-if="!content.liked" @click="likedBlog"><Icon type="ios-heart-outline" /></span>
      <span class="tips pointer showing" v-else @click="dislikedBlog"><Icon type="ios-heart" color="red" /></span>
    </div>
    <p class="content" v-html="formatCode(content.content)"></p>
    <Comment></Comment>
    <BackTop></BackTop>
  </div>
</template>

<script>
import {getBlogById, likedBlogById, dislikedBlogById} from '@/api/fetch'
import Comment from './Comment'

export default {
  name: '',
  data () {
    return {
      content: {}
    }
  },
  components: {
    Comment
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
    },
    likedBlog () {
      let id = this.$route.params.id || 1
      likedBlogById({blogId: id}).then(res => {
        if (res.code === 0) {
          this.content.liked = 1
        }
        this.$Message.info(res.message)
      })
    },
    dislikedBlog () {
      let id = this.$route.params.id || 1
      dislikedBlogById({blogId: id}).then(res => {
        if (res.code === 0) {
          this.content.liked = null
        }
        this.$Message.info(res.message)
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('setBlogId', to.params.id)
    })
  }
}
</script>

<style lang="less" scoped>
  @keyframes give {
    from {
      transform: scale(1.8) rotateZ(20deg);
    }
    to {
      transform: scale(1) rotateZ(-20deg);
    }
  }

  .blog {
    text-align: left;
    width: 80%;
    margin: auto;
    .title {
      text-align: center;
      margin: 20px 0 0;
      font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      font-size: 34px;
      font-weight: 700;
      line-height: 1.3;
    }
    .actions {
      text-align: right;
      font-size: 14px;
      margin: 10px;
      .tips {
        margin-left: 8px;
      }
      .pointer {
        cursor: pointer;
      }
      .showing {
        display: inline-block;
        transform: scale(1);
        animation: give .6s;
      }
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
