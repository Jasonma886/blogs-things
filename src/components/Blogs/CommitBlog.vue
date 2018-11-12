<template>
  <div class="commit-blog">
    <Form :model="formData" :label-width="100">
      <FormItem prop="title" label="文章标题">
        <Input type="text" v-model="formData.title" placeholder="the title of blog">
        </Input>
      </FormItem>
      <FormItem prop="origin" label="原文链接">
        <Input type="text" v-model="formData.origin" placeholder="the link of blog">
        </Input>
      </FormItem>
      <FormItem prop="author" label="文章作者">
        <Input type="text" v-model="formData.author" placeholder="the author of blog">
        </Input>
      </FormItem>
      <FormItem prop="about" label="文章类别">
        <Input type="text" v-model="formData.about" placeholder="the type of blog">
        </Input>
      </FormItem>
      <FormItem prop="content" label="文章内容">
        <Input type="textarea" v-model="formData.content" :rows="20" placeholder="the content of blog">
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">提交</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import {axiosHttp} from '@/plugins/axiosHttp'

export default {
  name: 'CommitBlog',
  data () {
    return {
      formData: {
        author: '',
        content: '',
        title: '',
        origin: '',
        about: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      axiosHttp({
        api: '/api/commitBlog',
        type: 'post',
        params: this.formData
      }).then(res => {
        if (res.code === 0) {
          this.$Notice.success({
            title: res.message
          })
        }
      })
    }
  }
}
</script>

<style lang="" scoped>

</style>
