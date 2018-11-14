import axios from 'axios'

export let axiosHttp = ({api, params, type}) => {
  return new Promise((resolve, reject) => {
    if (type === 'get' || !type) {
      axios.get(api, {params}).then(res => {
        resolve(res.data)
      }, error => {
        reject(error)
      })
    } else {
      axios.post(api, params).then(res => {
        resolve(res.data)
      }, error => {
        reject(error)
      })
    }
  })
}
