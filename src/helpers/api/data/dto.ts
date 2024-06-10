/**
 * AUTH DTOs
 */

export interface UserLoginDTO {
  email: string
  password: string
}

export interface UserForgotPasswordDTO {
  email: string
}
