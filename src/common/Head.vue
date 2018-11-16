<template>
  <div class="wrapper-header">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        内容管理
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        用户管理
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />
          统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-construct" />
        综合设置
      </MenuItem>
      <MenuItem name="5">
        <template v-if="$store.state.isLogin">
          <span>欢迎您, {{$store.state.userName}}</span>
          <Button @click="logout">Logout</Button>
        </template>
        <template v-else>
          <span>您尚未登录，请登录</span>
          <Button @click="login">Login</Button>
        </template>
      </MenuItem>
    </Menu>
    <Modal v-model="showLogin" draggable scrollable title="Please login." @on-ok="handleSubmit">
      <Form :model="formData" :label-width="100">
        <FormItem prop="user" label="user name">
          <Input type="text" v-model="formData.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" label="password">
          <Input type="password" v-model="formData.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {logout, toLogin} from 'api/fetch'

export default {
  name: 'Head',
  data () {
    return {
      theme1: 'dark',
      showLogin: false,
      formData: {
        user: 'jason',
        password: '123456'
      }
    }
  },
  methods: {
    logout () {
      logout().then(res => {
        if (res.code === 0) {
          this.$store.commit('setStatus', false)
          this.$Notice.success({
            title: res.message
          })
        } else {
          this.$Notice.error({
            title: res.message
          })
        }
      })
    },
    login () {
      this.showLogin = true
    },
    handleSubmit () {
      let params = {
        userName: this.formData.user,
        password: this.formData.password
      }
      toLogin(params).then(res => {
        if (res.code === 0) {
          this.$store.commit('setStatus', true)
          this.$store.commit('setUserName', this.formData.user)
          this.$Notice.success({
            title: res.message
          })
        } else {
          this.$Notice.error({
            title: res.message
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .wrapper-header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
  }
</style>
