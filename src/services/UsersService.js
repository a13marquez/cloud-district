import apiClient from './ApiClient'

export default {
  getUsersByPage(page) {
    return apiClient.get(`/users/per_page=5&page=${page}`)
  },
}
