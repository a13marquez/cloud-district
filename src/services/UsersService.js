import apiClient from './apiClient'

export default {
  getUsersByPage(page) {
    return apiClient.get(`/users?per_page=5&page=${page}`)
  },
  updateUserByID({ id, first_name, last_name, email }) {
    return apiClient.patch(`/users/${id}`, { first_name, last_name, email })
  },
}
