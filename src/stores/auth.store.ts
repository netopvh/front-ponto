import { AuthService } from '@/helpers/api/auth.api'
import { UserLoginDTO } from '@/helpers/api/data/dto'
import { IAuthResponse } from '@/helpers/api/data/responses'
import { toast } from 'react-toastify'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from '.'

interface IAuthStore {
  auth: IAuthResponse | null
  authenticated: boolean
  loading: boolean
  logIn: (login: UserLoginDTO) => void
  logOut: () => void
  forgotPassword: (email: string) => void
}

const initialState = {
  auth: null,
  authenticated: false,
  loading: false
}

export const useAuthStore = createStore<IAuthStore>(
  'AuthStore',
  persist(
    (set) => ({
      ...initialState,
      logIn: async (data: UserLoginDTO) => {
        try {
          set((state) => {
            state.loading = true
          })
          const res = await AuthService.login(data)

          if (!res) {
            set((state) => {
              state.loading = false
            })
            toast.error('Erro ao realizar autenticação')
            return
          }

          set((state) => {
            state.auth = res
            state.authenticated = true
            state.loading = false
          })

          localStorage.setItem('auth_token', res.token) // Armazena o token no localStorage
          toast.success(res.message)
        } catch (err: any) {
          set((state) => {
            state.loading = false
          })
          toast.error(err.message)
        }
      },
      logOut: async () => {
        try {
          await AuthService.logout()

          set((state) => {
            state.auth = null
            state.authenticated = false
          })
          localStorage.removeItem('auth_token')
          toast.success('Saiu do sistema com sucesso!')
        } catch (err: any) {
          toast.error(err.message)
        }
      },
      forgotPassword: async (email: string) => {
        try {
          set((state) => {
            state.loading = true
          })
          const res = await AuthService.forgotPassword(email)

          if (!res) {
            set((state) => {
              state.loading = false
            })
            toast.error('Erro ao realizar autenticação')
            return
          }

          set((state) => {
            state.loading = false
          })
          toast.success(res.message)
        } catch (err) {
          set((state) => {
            state.loading = false
          })
          toast.error('Erro ao recuperar a senha')
        }
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
