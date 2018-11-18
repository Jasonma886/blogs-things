<template>
  <Menu theme="light">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper" />
        内容管理
      </template>
      <MenuItem name="1-1" to="/Main/ManageBlog">文章管理</MenuItem>
      <MenuItem name="1-6" to="/Main/ManageCollection">我的收藏</MenuItem>
      <MenuItem name="1-2" to="/Main/MyComments">评论管理</MenuItem>
      <MenuItem name="1-3"  to="/Main/MyNotes">举报管理</MenuItem>
      <MenuItem name="1-4" to="/Main/Websites">网站管理</MenuItem>
      <MenuItem name="1-5" to="/Main/post">添加文章</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-people" />
        用户管理
      </template>
      <MenuItem name="2-1">新增用户</MenuItem>
      <MenuItem name="2-2" to="/Main/UserList">活跃用户</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-stats" />
        统计分析
      </template>
      <MenuGroup title="使用">
        <MenuItem name="3-1" to="/Main/Share">动态消息</MenuItem>
        <MenuItem name="3-2" to="/Main/BlogsAna">活跃分析</MenuItem>
        <MenuItem name="3-3">时段分析</MenuItem>
      </MenuGroup>
      <MenuGroup title="留存">
        <MenuItem name="3-4">用户留存</MenuItem>
        <MenuItem name="3-5">流失用户</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: '',
  methods: {
    goRoute (name) {
      this.$router.push(name)
    }
  }
}
</script>

<style lang="" scoped>

</style>
