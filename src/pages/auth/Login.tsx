import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import * as yup from 'yup'

//Components
import VerticalForm from '@/components/VerticalForm'
const AuthContainer = React.lazy(() => import('@/components/AuthPageLayout/AuthContainer'))
const AuthLayout = React.lazy(() => import('@/components/AuthPageLayout/AuthLayout'))
const FormInput = React.lazy(() => import('@/components/FormInput'))

//Stores
import { useAuthStore } from '@/stores/auth.store'

//Others
import { UserLoginDTO } from '@/helpers/api/data/dto'
import { paths } from '@/routes/paths'
import { patterns } from '@/utils'

const BottomLink = () => {
  return (
    <div className='text-center my-4'>
      <p className='text-muted'>
        Não possui conta?&nbsp;
        <Link to='/register' className='text-muted ms-1 link-offset-3 underline underline-offset-4'>
          <b>Cadastre-se</b>
        </Link>
      </p>
    </div>
  )
}

const PasswordInputChild = () => {
  return (
    <Link to={paths.auth.forgotPassword} className='text-muted text-xs underline decoration-dashed underline-offset-4'>
      Esqueceu sua senha?
    </Link>
  )
}

const LoginPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const defaultValues = {
    email: '',
    password: ''
  }

  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required('E-mail obrigatório').matches(patterns.email, 'O e-mail informado é inválido'),
      password: yup.string().required('Senha obrigatória')
    })
  )

  const logIn = useAuthStore((state) => state.logIn)
  const loading = useAuthStore((state) => state.loading)
  const { authenticated } = useAuthStore((state) => state)

  const returnTo = searchParams.get('returnTo')

  useEffect(() => {
    if (authenticated) {
      navigate(returnTo || paths.dashboard, { replace: true })
    }
  }, [authenticated, navigate, returnTo])

  const handleLogin = async (formData: UserLoginDTO) => {
    await logIn(formData)
    // navigate(returnTo || paths.dashboard, { replace: true })
  }

  return (
    <AuthContainer>
      <AuthLayout
        authTitle='Acessar'
        helpText='Informe seu e-mail e senha para acessar o sistema.'
        bottomLinks={<BottomLink />}
      >
        <VerticalForm<UserLoginDTO> onSubmit={handleLogin} resolver={schemaResolver} defaultValues={defaultValues}>
          <FormInput
            label='E-mail'
            type='email'
            name='email'
            className='form-input'
            placeholder='Informe seu e-mail'
            containerClass='mb-6 space-y-2'
            labelClassName='font-semibold text-gray-500'
            required
          />

          <FormInput
            label='Senha'
            type='password'
            name='password'
            placeholder='Informe sua senha'
            className='form-input rounded-e-none'
            containerClass='mb-6 space-y-2'
            labelClassName='font-semibold text-gray-500'
            labelContainerClassName='flex justify-between items-center mb-2'
            required
          >
            <PasswordInputChild />
          </FormInput>

          <FormInput
            label='Manter conectado'
            type='checkbox'
            name='checkbox'
            className='form-checkbox rounded text-primary'
            containerClass='mb-6'
            labelClassName='ms-2'
          />

          <div className='text-center mb-6'>
            <button className='btn bg-black text-white min-w-44' type='submit' disabled={loading}>
              Entrar
            </button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </AuthContainer>
  )
}

export default LoginPage
