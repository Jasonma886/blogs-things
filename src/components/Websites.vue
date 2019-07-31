<template>
  <div class="user-list">
    <Table :columns="columns" :data="userList"></Table>
  </div>
</template>

<script>
import {axiosHttp} from '@/plugins/axiosHttp'

export default {
  name: 'UserList',
  data () {
    return {
      userList: [],
      columns: [{
        key: 'name',
        title: 'name'
      }, {
        key: 'country',
        title: 'country'
      }, {
        key: 'url',
        title: 'url'
      }]
    }
  },
  created () {
    axiosHttp({
      api: '/api/websites',
      type: 'get',
      params: {
        userName: 'jason'
      }
    }).then(res => {
      this.userList = res
    })
  }
}
</script>

<style lang="" scoped>

</style>
