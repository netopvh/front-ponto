import { Link } from 'react-router-dom'

//image
import logoDark from '@/assets/images/logo-dark.png'
import logoSm from '@/assets/images/logo-sm.png'
import logo from '@/assets/images/logo.png'

const LogoBox = () => {
  return (
    <>
      <Link to='/' className='logo-box'>
        <div className='logo-light'>
          <img src={logo} className='logo-lg h-[46px]' alt='Light logo' />
          <img src={logoSm} className='logo-sm h-[26px]' alt='Small logo' />
        </div>

        <div className='logo-dark'>
          <img src={logoDark} className='logo-lg h-[46px]' alt='Dark logo' />
          <img src={logoSm} className='logo-sm h-[26px]' alt='Small logo' />
        </div>
      </Link>
    </>
  )
}

export default LogoBox
