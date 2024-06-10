import { IAuthResponse, IMessageResponse } from '@/helpers/api/data/responses'
import { UserLoginDTO } from './data/dto'
import { endpoints } from './endpoints'
import httpClient from './httpClient'

const login = (data: UserLoginDTO): Promise<IAuthResponse> => {
  return httpClient.post(endpoints.login, data)
}

const logout = () => {
  return httpClient.post(endpoints.logout)
}

const forgotPassword = (email: string): Promise<IMessageResponse> => {
  return httpClient.post(endpoints.forgotPassword, { email: email })
}

export const AuthService = { login, forgotPassword, logout }
