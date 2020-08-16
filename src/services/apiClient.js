import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

export default apiClient
