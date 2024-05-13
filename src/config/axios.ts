import axios from 'axios'

export const authInstance = axios.create({
  baseURL: 'http://localhost:8006/api/v1'
})

authInstance.interceptors.response.use((response) => {
  return response
}, async (error) => {
  if (error.response !== null && error.response.status === 401) {
    // LOG ...
    // CLEAR STORAGE + REDIRECT A /LOGIN
  }
  return await Promise.reject(error)
})
