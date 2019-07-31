<template>
  <div class="manage-blog">
    <nav class="category">
      <ul class="nav-list">
        <li class="list-item" :class="{active: item.key === curType}" v-for="(item, index) in typesList" @click="getList(item.key)" :key="index">{{item.name}}</li>
      </ul>
    </nav>
    <template v-for="(item, key) in blogsList">
      <Card :title="item.title" :content="item.content"
            :blog-id="item.blogId" :show-tools="$store.state.isLogin"
            :commit-time="item.commitTime" :author="item.author"
            :clicked="item.clicked" :comments="item.count"
            @update="getList(curType)"
            @click='goInto(item.blogId)' :key="key"></Card>
    </template>
    <Page :total="total" :current="curPage"
          :show-total="true" @on-change="changePage"></Page>
  </div>
</template>

<script>
import {getBlogsList} from 'api/fetch'
import Card from 'base/Card'

export default {
  name: '',
  data () {
    return {
      blogsList: [],
      curType: 'all',
      total: 0,
      curPage: 1,
      typesList: [
        {name: '所有', key: 'all'},
        {name: 'javascript', key: 'javascript'},
        {name: 'node', key: 'node'},
        {name: 'linux', key: 'linux'},
        {name: 'others', key: 'others'},
        {name: 'CSS', key: 'CSS'}
      ]
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
      getBlogsList({type: type}).then(res => {
        if (res.code === 0) {
          this.blogsList = res.data
        }
      })
    },
    goInto (id) {
      this.$router.push(`/Main/Blog/${id}`)
    },
    changePage () {}
  }
}
</script>

<style lang="less" scoped>
.category {
  background-color: #fff;
  padding: 1.5rem 2rem;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
  .nav-list {
    display: flex;
    align-items: baseline;
    .list-item {
      position: relative;
      cursor: pointer;
      margin-right: 20px;
    }
    .active {
      color: #007fff;
    }
  }
}
</style>
