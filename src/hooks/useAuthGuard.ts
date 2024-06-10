import { paths } from '@/routes/paths'
import { useAuthStore } from '@/stores/auth.store'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuthGuard = () => {
  const navigate = useNavigate()
  const authenticated = useAuthStore((state) => state.authenticated)

  const [checked, setChecked] = useState(false)

  const check = useCallback(() => {
    if (!authenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname
      }).toString()

      const href = `${paths.auth.login}?${searchParams}`
      navigate(href, { replace: true })
      return
    }
    setChecked(true)
  }, [authenticated, navigate])

  useEffect(() => {
    check()
  }, [check])

  return checked
}

export default useAuthGuard
