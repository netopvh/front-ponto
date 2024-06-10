import axios from 'axios'

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
})

const getToken = (): string | null => {
  return localStorage.getItem('auth_token')
}

// Interceptador para adicionar o token ao header Authorization
httpClient.interceptors.request.use(
  async (config: any) => {
    const token = getToken()
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptador para lidar com respostas de erro
httpClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error('Não autenticado, redirecionando para login.')
      // Redirecionar para a página de login ou lidar com a autenticação de outra forma
      // window.location.replace(`${window.location.origin}/login`)
    }

    if (error?.response && error?.response?.data) {
      return Promise.reject(error?.response?.data)
    }
    return Promise.reject(error)
  }
)

export default httpClient
