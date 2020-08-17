import apiClient from './apiClient'

export default {
  getUsersByPage(page) {
    return apiClient.get(`/users?per_page=5&page=${page}`)
  },
}
