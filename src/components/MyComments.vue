<template>
  <div class="comments">
    <div class="nav">
      <RadioGroup v-model="whose" type="button" @on-change="getComments">
        <Radio label="mine">我的评论</Radio>
        <Radio label="others">@我</Radio>
      </RadioGroup>
    </div>
    <div class="content" v-if="list.length > 0">
      <template v-if="whose === 'mine'">
        <div class="comment" v-for="(item, index) in list" :key="index">
          <span>您在<a> {{item.title}} </a>{{item.toUser ? '回复@' + item.toUser : '发表评论'}}：</span>
          <span style="color: #888;padding: 8px 15px;">{{item.content}}</span>
          <div class="tools">
            <i class="tips"><Icon type="ios-calendar-outline" /> {{item.time}}</i>
            <i class="tips"><Icon type="ios-chatboxes" /> {{item.comments || 0}}</i>
            <span class="delete" @click="deleteComment(item.commentId)">删除</span>
          </div>
          <Divider :dashed="true"></Divider>
        </div>
      </template>
      <template v-else>
        <div class="comment" v-for="(item, index) in list" :key="index">
          <span>{{item.fromUser}}在<a> {{item.title}} </a>回复您：</span>
          <span style="color: #888;padding: 8px 15px;">{{item.content}}</span>
          <div class="tools">
            <i class="tips"><Icon type="ios-calendar-outline" /> {{item.time}}</i>
            <i class="tips"><Icon type="ios-chatboxes" /> {{item.comments || 0}}</i>
            <span class="delete" @click="deleteComment(item.commentId)">删除</span>
          </div>
          <Divider :dashed="true"></Divider>
        </div>
      </template>
      <Page :total="total" :current="curPage"
            :show-total="true" @on-change="changePage"></Page>
    </div>
    <div v-else class="no-data">
      暂无数据
    </div>
  </div>
</template>

<script>
import {getCommentsByUser, deleteComment} from 'api/fetch'

export default {
  name: 'MyComments',
  data () {
    return {
      list: [],
      total: 0,
      curPage: 1,
      whose: 'mine'
    }
  },
  created () {
    this.getComments()
  },
  methods: {
    getComments (type = 'mine') {
      getCommentsByUser({type}).then(res => {
        if (res.code === 0) {
          this.list = res.data
        }
      })
    },
    deleteComment (id) {
      deleteComment({commentId: id}).then(res => {
        if (res.code === 0) {
          this.getComments(this.whose)
          this.$Message.success(res.message)
        } else {
          this.$Message.error(res.message)
        }
      })
    },
    changePage () {}
  }
}
</script>

<style lang="less" scoped>
.comments {
  .nav {
    margin: 10px 20px;
  }
  .content {
    padding: 15px 10px;
    .comment {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      .delete {
        color: red;
        opacity: 0;
        display: inline-block;
        transition: opacity .8s;
        cursor: pointer;
      }
      .tools {
        .tips {
          margin-right: 8px;
        }
      }
      &:hover {
        .delete {
          opacity: 0.9;
        }
      }
    }
  }
  .no-data {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    padding-top: 100px;
    color: #ddd;
  }
}
</style>
