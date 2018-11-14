import {axiosHttp} from '@/plugins/axiosHttp'

export let getBlogsList = (params) => {
  return axiosHttp({
    api: '/api/blog/getBlogsList',
    type: 'get',
    params
  })
}

export let toLogin = (params) => {
  return axiosHttp({
    api: '/api/user/login',
    type: 'get',
    params
  })
}

export let getUsersList = (params) => {
  return axiosHttp({
    api: '/api/user/userList',
    type: 'get',
    params
  })
}

export let commitBlog = (params) => {
  return axiosHttp({
    api: '/api/blog/commitBlog',
    type: 'post',
    params
  })
}

export let getBlogById = (params) => {
  return axiosHttp({
    api: '/api/blog/getBlogById',
    type: 'get',
    params
  })
}

export let checkLogin = (params) => {
  return axiosHttp({
    api: '/api/user/checkLogin',
    type: 'get',
    params
  })
}

export let logout = (params) => {
  return axiosHttp({
    api: '/api/user/logout',
    type: 'get',
    params
  })
}

export let getGFInfo = (params) => {
  return axiosHttp({
    api: '/gf/api/stockspriteinterface/2.0.0/timeline',
    type: 'post',
    params
  })
}
