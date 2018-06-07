import axios from 'axios'

const httpService = {
  
  get: (path, params) => {
    return axios.get(path)
  },

  post: (path, params) => {
    return axios.post(params)
  }
}

export default httpService