export interface IMessageResponse {
  message: string
}

export interface IUserResponse {
  id: number
  name: string
  email: string
  level: string
  created_at: string
}

export interface IAuthResponse {
  user: IUserResponse
  message: string
  status: string
  token: string
}
