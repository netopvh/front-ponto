/* eslint-disable react-hooks/exhaustive-deps */
import useAuthGuard from '@/hooks/useAuthGuard' // Adjust the import path as needed
import { ReactNode } from 'react'

interface AuthGuardProp {
  children: ReactNode
}

const AuthGuard = ({ children }: AuthGuardProp) => {
  const checked = useAuthGuard()

  if (!checked) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
