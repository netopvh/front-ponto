import { Stack } from '@mui/material'
import { ReactNode } from 'react'

interface AuthLayout {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayout) => {
  return <Stack>{children}</Stack>
}

export default AuthLayout
