import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserList from '@/components/UserList'
import Websites from '@/components/Websites'
import Main from '@/components/Main'
import Left from '@/common/Left'
import Head from '@/common/Head'
import CommitBlog from 'components/Blogs/CommitBlog'
import ManageBlog from 'components/Blogs/ManageBlog'
import Blog from 'components/Blogs/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
        {
          path: 'Websites',
          name: 'Websites',
          components: {default: Websites, left: Left}
        },
        {
          path: 'post',
          name: 'post',
          components: {default: CommitBlog, left: Left}
        }, {
          path: 'Blog/:id',
          name: 'Blog',
          components: {default: Blog, left: Left}
        },
        {
          path: 'ManageBlog',
          name: 'ManageBlog',
          components: {default: ManageBlog, left: Left}
        }
      ]
    }
  ]
})
