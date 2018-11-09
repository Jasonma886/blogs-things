import axios from 'axios'

export let axiosHttp = ({api, params, type}) => {
  return new Promise((resolve, reject) => {
    axios[type](api, {params}).then(res => {
      resolve(res.data)
    }, error => {
      reject(error)
    })
  })
}
