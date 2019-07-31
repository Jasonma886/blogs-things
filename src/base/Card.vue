<template>
  <div class="card">
    <div class="left">
      <a @click="readDetail" class="title">{{title}}</a>
      <p class="content">{{content}}</p>
      <i class="tips"><Icon type="ios-contact" /> {{author}}</i>
      <i class="tips"><Icon type="ios-calendar-outline" /> {{commitTime}}</i>
      <i class="tips"><Icon type="ios-eye" /> {{clicked}}</i>
      <i class="tips"><Icon type="ios-chatboxes" /> {{comments || 0}}</i>
    </div>
    <div class="right" v-if="showTools">
      <a style="margin-right: 8px;" @click="$router.push('/Main/UpdateBlog/'+blogId)">编辑</a>
      <Poptip trigger="click" title="确定删除吗？">
        <a style="color:red;">删除</a>
        <div slot="content">
          <Button type="primary" size="small" @click="deleteBlog(blogId)">确定</Button>
          <Button size="small">取消</Button>
        </div>
      </Poptip>
    </div>
  </div>
</template>

<script>
import {deleteBlog} from 'api/fetch'

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
    },
    blogId: {
      type: Number
    },
    showTools: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    readDetail () {
      this.$emit('click')
    },
    deleteBlog (id) {
      deleteBlog({blogId: id}).then(res => {
        if (res.code === 0) {
          this.$Message.success(res.message)
          this.$emit('update')
        } else {
          this.$Message.warning(res.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  margin: 10px;
  text-align: left;
  display: flex;
  border: 1px solid #efefef;
  padding: 10px;
  .left {
    width: 90%;
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
  .right {
    width: 10%;
    padding: 30px 15px;
    opacity: 0;
    transition: all .5s;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
