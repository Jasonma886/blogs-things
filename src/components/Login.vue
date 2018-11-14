<template>
  <div class="login">
    <Form :model="formData" :label-width="200">
      <FormItem prop="user">
        <Input type="text" v-model="formData.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formData.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import {toLogin} from 'api/fetch'

export default {
  name: 'Login',
  data () {
    return {
      formData: {
        user: 'jason',
        password: '123456'
      }
    }
  },
  created () {

  },
  methods: {
    handleSubmit () {
      let params = {
        userName: this.formData.user,
        password: this.formData.password
      }
      toLogin(params).then(res => {
        if (res.code === 0) {
          this.$store.commit('setStatus', true)
          this.$Notice.success({
            title: res.message
          })
          this.$router.push('Main')
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

<style lang="" scoped>

</style>
