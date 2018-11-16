import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import {checkLogin} from 'api/fetch'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import Websites from '@/components/Websites'
import Main from '@/components/Main'
import Left from '@/common/Left'
import Head from '@/common/Head'
import CommitBlog from 'components/Blogs/CommitBlog'
import ManageBlog from 'components/Blogs/ManageBlog'
import ManageCollection from 'components/Blogs/ManageCollection'
import Blog from 'components/Blogs/Blog'
import BlogsAna from 'components/analysic/BlogsAna'
import Share from 'components/analysic/share'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', redirect: '/Main/UserList'},
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Main',
      // name: 'Main',
      components: {default: Main, head: Head},
      children: [
        {path: '/', name: '', components: {default: UserList, left: Left}},
        {
          path: 'UserList',
          name: 'UserList',
          components: {default: UserList, left: Left}
        },
        {path: 'Websites', name: 'Websites', components: {default: Websites, left: Left}},
        {path: 'post', name: 'post', components: {default: CommitBlog, left: Left}},
        {path: 'Blog/:id', name: 'Blog', components: {default: Blog, left: Left}},
        {path: 'ManageBlog', name: 'ManageBlog', components: {default: ManageBlog, left: Left}},
        {path: 'ManageCollection', name: 'ManageCollection', components: {default: ManageCollection, left: Left}},
        {path: 'BlogsAna', name: 'BlogsAna', components: {default: BlogsAna, left: Left}},
        {path: 'Share', name: 'Share', components: {default: Share, left: Left}}
      ]
    },
    {path: '*', redirect: '/Main/UserList'}
  ]
})

router.beforeEach((to, from, next) => {
  checkLogin().then(res => {
    if (res.data && res.data.login) {
      store.commit('setStatus', true)
      store.commit('setUserName', res.data.userName)
    } else {
      store.commit('setStatus', false)
      store.commit('setUserName', '')
    }
  })
  next()
})

export default router
