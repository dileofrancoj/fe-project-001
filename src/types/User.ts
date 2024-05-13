export interface LoginProps {
  user: string
  password: string
}

export interface User {
  name?: string
  jwt: string
}

export interface ValidateUser {
  valid: boolean
}
