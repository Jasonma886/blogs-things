<template>
  <div class="comment">
    <Divider></Divider>
    <div class="title">评论（已有{{total}}条评论）</div>
    <Form :label-width="100">
      <FormItem prop="user" label="输入内容">
        <Input type="textarea" v-model="content" placeholder="Write down your comment" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="sendComment">Send</Button>
      </FormItem>
    </Form>
    <template v-for="(item, index) in commentsList">
      <Floor :list="item" :key="index" @updated="getCommentsList"></Floor>
    </template>
  </div>
</template>

<script>
import Floor from './Floor'
import {addComment, getComments} from 'api/fetch'

export default {
  name: 'Comment',
  data () {
    return {
      content: '',
      total: 0,
      commentsList: []
    }
  },
  mounted () {
    this.getCommentsList()
  },
  components: {
    Floor
  },
  methods: {
    sendComment () {
      let params = {
        content: this.content,
        from: this.$store.state.userName,
        blogId: this.$store.state.blogId
      }
      addComment(params).then(res => {
        if (res.code === 0) {
          this.$Message.info(res.message)
          this.content = ''
          this.getCommentsList()
        } else {
          this.$Message.warning(res.message)
        }
      })
    },
    getCommentsList () {
      let id = this.$route.params.id || 1
      getComments({blogId: id}).then(res => {
        if (res.code === 0) {
          this.commentsList = res.data
          this.total = res.total
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  .title {
    color: #8a9aa9;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 1.67rem 0 5px;
  }
}
</style>
