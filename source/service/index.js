import axios from 'axios'
import { API_HOST } from './host'

const api = axios.create({
  baseURL: `${API_HOST}/api/`,
  timeout: 5000
})

export default api
