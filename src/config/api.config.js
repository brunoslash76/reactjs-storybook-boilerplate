import axios from 'axios'

const api = axios.create({
    baseURL: 'your_url',
    timeout: 5000,
})

export default api
