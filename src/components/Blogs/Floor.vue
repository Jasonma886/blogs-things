<template>
  <div class="floor">
    <div class="author">
      <div class="ivu-avatar">
        {{list.fromUser}}
      </div>
      <div class="info">
        <a href="">{{list.fromUser}}</a>
        <div class="meta">
          <span>1楼-{{list.time}}</span>
        </div>
      </div>
    </div>
    <div class="wrap">
      <p class="content">{{list.content}}</p>
      <div class="tools">
        <span @click="praise">
          <template v-if="!isLiked">
            <Icon size="20" color="#aaa" type="ios-thumbs-up" />({{list.liked}})
          </template>
          <template v-else>
            <Icon size="20" color="#f39b18" type="ios-thumbs-up" />({{list.liked + 1}})
          </template>
        </span>
        <span @click="reply"><Icon size="20" type="md-albums" />回复</span>
      </div>
    </div>
    <Divider></Divider>
    <Modal v-model="showReply" draggable scrollable @on-ok="sendReply">
      <div slot="header">回复<span style="color: dodgerblue">jason</span></div>
      <Form :model="formData">
        <FormItem prop="user">
          <Input type="textarea" v-model="formData.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {addComment} from 'api/fetch'

export default {
  name: 'Floor',
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isLiked: false,
      showReply: false,
      formData: {}
    }
  },
  methods: {
    praise () {
      this.isLiked = !this.isLiked
    },
    reply () {
      this.showReply = true
    },
    sendReply () {
      let params = {
        from: 'jason',
        blogId: 1,
        content: '沙发'
      }
      addComment(params)
    }
  }
}
</script>

<style lang="less" scoped>
.floor {
  width: 80%;
  margin: auto;
  .author {
    display: flex;
    .info {
      margin-left: 6px;
      .meta {
        font-size: 12px;
        color: #969696;
      }
    }
  }
  .wrap {
    .content {
      margin: 10px 0;
    }
    .tools span {
      cursor: pointer;
      margin-right: 5px;
    }
  }
}
</style>
