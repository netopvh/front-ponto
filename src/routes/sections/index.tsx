import AuthGuard from '@/auth/auth-guard'
import Error404 from '@/pages/Errors/404'
import React from 'react'
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
import { paths } from '../paths'
import { authProtectedFlattenRoutes, publicFlattenRoutes } from './main'

//Layout Components
import DefaultLayout from '@/layouts/DefaultLayout'
import VerticalLayout from '@/layouts/VerticalLayout'

// Stores
import { useAuthStore } from '@/stores/auth.store'
import { useThemeStore } from '@/stores/theme/theme.store'

export interface RoutesProps {
  path: RouteProps['path']
  name?: string
  element?: RouteProps['element']
  route?: any
  exact?: boolean
  icon?: string
  header?: string
  roles?: string[]
  children?: RoutesProps[]
}

const Router = (props: RouteProps) => {
  const Layout = useThemeStore((state) => state)
  const authenticated = useAuthStore((state) => state.authenticated)

  return (
    <React.Fragment>
      <Routes>
        <Route>
          <Route
            path='/'
            element={
              authenticated ? (
                <Navigate
                  to={{
                    pathname: paths.dashboard
                  }}
                />
              ) : (
                <Navigate
                  to={{
                    pathname: paths.auth.login,
                    search: `?returnTo=${window.location.pathname}`
                  }}
                />
              )
            }
          />
        </Route>

        <Route>
          {publicFlattenRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <DefaultLayout {...props} layout={Layout}>
                  {route.element}
                </DefaultLayout>
              }
            />
          ))}
        </Route>

        <Route>
          {authProtectedFlattenRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={
                <AuthGuard>
                  <VerticalLayout {...props}>{route.element}</VerticalLayout>
                </AuthGuard>
              }
            />
          ))}
        </Route>
        <Route>
          <Route path='*' element={<Navigate to={paths.error.notFound} replace />} />
          <Route
            path={paths.error.notFound}
            element={
              <DefaultLayout {...props} layout={Layout}>
                <Error404 />
              </DefaultLayout>
            }
          />
          <Route path={paths.error.serverError} element={<DefaultLayout {...props} layout={Layout} />} />
        </Route>
      </Routes>
    </React.Fragment>
  )

  // return useRoutes([
  //   {
  //     path: '/',
  //     element: (
  //       <AuthGuard>
  //         <MainLayout>
  //           <DashboardPage />
  //         </MainLayout>
  //       </AuthGuard>
  //     )
  //   },
  //   ...MainRoutes,
  //   ...AuthRoutes,
  //   { path: '*', element: <Navigate to='/404' replace /> }
  // ])
}

export default Router
