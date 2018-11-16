<template>
  <div class="collections">
    <Card v-for="(item, key) in blogsList" :title="item.title" :content="item.content"
          :commit-time="item.commitTime" :author="item.author"
          :clicked="item.clicked" :comments="item.count"
          @click='goInto(item.blogId)' :key="key"></Card>
  </div>
</template>

<script>
import {getCollections} from 'api/fetch'
import Card from 'base/Card'

export default {
  name: 'ManageCollection',
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
    getList (type = 'all') {
      this.curType = type
      getCollections({type: type}).then(res => {
        if (res.code === 0) {
          this.blogsList = res.data
        }
      })
    },
    goInto (id) {
      this.$router.push(`/Main/Blog/${id}`)
    }
  }
}
</script>

<style lang="" scoped>

</style>
