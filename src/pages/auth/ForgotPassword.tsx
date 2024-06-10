import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

// components
import { paths } from '@/routes/paths'
import { useAuthStore } from '@/stores/auth.store'
import { patterns } from '@/utils'
import { FormInput, PageBreadcrumb, VerticalForm } from '../../components'
import AuthContainer from '../../components/AuthPageLayout/AuthContainer'
import AuthLayout from '../../components/AuthPageLayout/AuthLayout'

interface UserData {
  email: string
}

const BottomLink = () => {
  return (
    <div className='text-center my-4'>
      <p className='text-muted'>
        Voltar para o{' '}
        <Link to={paths.auth.login} className='text-muted ms-1 link-offset-3 underline underline-offset-4'>
          <b>Login</b>
        </Link>
      </p>
    </div>
  )
}
const ForgotPasswordPage = () => {
  const forgotPassword = useAuthStore((state) => state.forgotPassword)
  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().required('E-mail obrigatório').matches(patterns.email, 'O e-mail informado é inválido')
    })
  )
  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    forgotPassword(formData.email)
  }
  return (
    <>
      <PageBreadcrumb title='Recuperar Senha' />
      <AuthContainer>
        <AuthLayout
          authTitle='Recuperar Senha'
          helpText='Digite seu endereço de e-mail e enviaremos um e-mail com instruções para redefinir sua senha.'
          bottomLinks={<BottomLink />}
        >
          <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
            <FormInput
              label='Endereço de e-mail'
              type='text'
              name='email'
              placeholder='Informe o endereço dee-mail'
              containerClass='mb-6 space-y-2'
              className='form-input'
              required
            />
            <div className='text-center'>
              <button className='btn bg-primary text-white' type='submit'>
                <i className='ri-login-box-line me-1'></i> Recuperar Senha{' '}
              </button>
            </div>
          </VerticalForm>
        </AuthLayout>
      </AuthContainer>
    </>
  )
}

export default ForgotPasswordPage
