<template>
  <div class="comments">
    <div class="nav">
      <RadioGroup v-model="whose" type="button">
        <Radio label="mine">我的评论</Radio>
        <Radio label="others">@我</Radio>
      </RadioGroup>
    </div>
    <div class="content" v-if="list.length > 0">
      <div class="comment" v-for="(item, index) in list" :key="index">
        <span>您在<a href="">{{item.title}}</a>{{item.to_user ? '回复@' + item.to_user : '发表评论'}}：</span>
        <span style="color: #888;">{{item.content}}</span>
        <div class="tools">
          <i class="tips"><Icon type="ios-calendar-outline" /> {{item.time}}</i>
          <i class="tips"><Icon type="ios-chatboxes" /> {{item.comments || 0}}</i>
          <span style="color: red">删除</span>
        </div>
        <Divider :dashed="true"></Divider>
      </div>
    </div>
    <div v-else class="no-data">
      暂无数据
    </div>
  </div>
</template>

<script>
import {getCommentsByUser} from 'api/fetch'

export default {
  name: 'MyComments',
  data () {
    return {
      list: [],
      whose: 'mine'
    }
  },
  created () {
    getCommentsByUser().then(res => {
      if (res.code === 0) {
        this.list = res.data
      }
    })
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
