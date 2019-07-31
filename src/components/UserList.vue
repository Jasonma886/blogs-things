<template>
  <div class="user-list">
    <Table :columns="columns" :data="userList"></Table>
    <Page :total="total" :current="curPage"
          :show-total="true" @on-change="changePage"></Page>
  </div>
</template>

<script>
import {getUsersList} from 'api/fetch'

export default {
  name: 'UserList',
  data () {
    return {
      userList: [],
      total: 0,
      curPage: 1,
      columns: [{
        key: 'user_name',
        title: '用户名'
      }, {
        key: 'user_age',
        title: '年龄'
      }, {
        key: 'createTime',
        title: '创建日期'
      }, {
        key: 'last_login',
        title: '上次登录'
      }]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getUsersList({
        page: this.curPage,
        size: 10
      }).then(res => {
        this.userList = res.data
        this.total = res.total
      })
    },
    changePage (next) {
      this.curPage = next
      this.getList()
    }
  }
}
</script>

<style lang="less" scoped>
.user-list {
  width: 98%;
}
</style>
