<template>
  <div class="commit-blog">
    <Form :model="formData" :label-width="100">
      <FormItem prop="title" label="文章标题">
        <Input type="text" v-model="formData.title" placeholder="the title of blog">
        </Input>
      </FormItem>
      <FormItem prop="subTitle" label="文章副标题">
        <Input type="text" v-model="formData.subTitle" placeholder="the subTitle of blog">
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
        <RadioGroup v-model="formData.about" type="button">
          <Radio label="javascript"></Radio>
          <Radio label="node"></Radio>
          <Radio label="linux"></Radio>
          <Radio label="others"></Radio>
        </RadioGroup>
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
import {commitBlog} from '@/api/fetch'

export default {
  name: 'CommitBlog',
  data () {
    return {
      formData: {
        author: '',
        subTitle: '',
        content: '',
        title: '',
        origin: '',
        about: 'javascript'
      }
    }
  },
  methods: {
    handleSubmit () {
      commitBlog(this.formData).then(res => {
        if (res.code === 0) {
          this.$Notice.success({
            title: res.message
          })
        } else {
          this.$Notice.warning({
            title: res.message
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
