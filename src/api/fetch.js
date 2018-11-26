import {axiosHttp} from '@/plugins/axiosHttp'

export let getBlogsList = (params) => {
  return axiosHttp({
    api: '/api/blog/getBlogsList',
    type: 'get',
    params
  })
}

export let getCollections = (params) => {
  return axiosHttp({
    api: '/api/blog/getCollections',
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

export let updateBlog = (params) => {
  return axiosHttp({
    api: '/api/blog/updateBlog',
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

export let deleteBlog = (params) => {
  return axiosHttp({
    api: '/api/blog/deleteBlog',
    type: 'delete',
    params
  })
}

export let likedBlogById = (params) => {
  return axiosHttp({
    api: '/api/blog/likedBlog',
    type: 'post',
    params
  })
}

export let dislikedBlogById = (params) => {
  return axiosHttp({
    api: '/api/blog/dislikedBlog',
    type: 'delete',
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

// 添加评论
export let addComment = (params) => {
  return axiosHttp({
    api: '/api/comment/addComment',
    type: 'post',
    params
  })
}

// 获取评论
export let getComments = (params) => {
  return axiosHttp({
    api: '/api/comment/getComments',
    type: 'get',
    params
  })
}

// 根据ID删除评论
export let deleteComment = (params) => {
  return axiosHttp({
    api: '/api/comment/deleteComment',
    type: 'delete',
    params
  })
}

// 获取某用户评论
export let getCommentsByUser = (params) => {
  return axiosHttp({
    api: '/api/comment/getCommentsByUser',
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
