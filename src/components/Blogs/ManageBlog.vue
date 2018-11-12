<template>
  <div class="manage-blog">
    <template v-for="(item, key) in blogsList">
      <Card :title="item.title" :content="item.content"
            :commit-time="item.commitTime" :author="item.author"
            @click='goInto(item.blogId)' :key="key"></Card>
    </template>
  </div>
</template>

<script>
import {getBlogsList} from 'api/fetch'
import Card from 'base/Card'

export default {
  name: '',
  data () {
    return {
      blogsList: []
    }
  },
  created () {
    this.getList()
  },
  components: {
    Card
  },
  methods: {
    getList () {
      getBlogsList().then(res => {
        if (res.code === 0) {
          this.blogsList = res.data
        }
      })
    },
    goInto (id) {
      this.$router.push(`/main/Blog/${id}`)
    }
  }
}
</script>

<style lang="" scoped>

</style>
