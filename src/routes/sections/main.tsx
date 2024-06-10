import { Route } from 'react-router-dom'
import { RoutesProps } from '.'
import { paths } from '../paths'

//Public
import ForgotPassword from '@/pages/auth/ForgotPassword'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'

//Private
import Profile from '@/pages/Account/Profile'
import Dashboard from '@/pages/Dashboard'
import Settings from '@/pages/Settings'

const authRoutes: RoutesProps[] = [
  {
    path: paths.auth.register,
    name: 'Register',
    element: <Register />,
    route: Route
  },
  {
    path: paths.auth.login,
    name: 'Login',
    element: <Login />,
    route: Route
  },
  {
    path: paths.auth.forgotPassword,
    name: 'Forgot Password',
    element: <ForgotPassword />,
    route: Route
  }
]

const mainRoutes: RoutesProps[] = [
  {
    path: paths.dashboard,
    name: 'Dashboard',
    element: <Dashboard />,
    route: Route
  },
  {
    path: paths.account.profile,
    name: 'Profile',
    element: <Profile />,
    route: Route
  },
  {
    path: paths.settings,
    name: 'Settings',
    element: <Settings />,
    route: Route
  }
]

const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = []

  routes = routes || []
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item)
    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)]
    }
  })
  return flatRoutes
}

const authProtectedRoutes = [...mainRoutes]
const publicRoutes = [...authRoutes]

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes])
const publicFlattenRoutes = flattenRoutes([...publicRoutes])

export { authProtectedFlattenRoutes, authProtectedRoutes, publicFlattenRoutes, publicRoutes }
