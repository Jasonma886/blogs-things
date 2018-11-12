import {axiosHttp} from '@/plugins/axiosHttp'

export let getBlogsList = (params) => {
  return axiosHttp({
    api: '/api/getBlogsList',
    type: 'get',
    params
  })
}

export let toLogin = (params) => {
  return axiosHttp({
    api: '/api/login',
    type: 'get',
    params
  })
}

export let getUsersList = (params) => {
  return axiosHttp({
    api: '/api/userList',
    type: 'get',
    params
  })
}

export let commitBlog = (params) => {
  return axiosHttp({
    api: '/api/commitBlog',
    type: 'post',
    params
  })
}

export let getBlogById = (params) => {
  return axiosHttp({
    api: '/api/getBlogById',
    type: 'get',
    params
  })
}
