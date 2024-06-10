import SettingsMenu from '@/components/Menus/SettingsMenu'
import { Link } from 'react-router-dom'

const SettingsPage = () => {
  return (
    <div className='card'>
      <div className='p-6'>
        <div className='mb-10'>
          <div className='flex justify-between items-center'>
            <h4 className='text-lg'>Configurações</h4>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-12 mb-10'>
          <div className='bg-success h-28 text-white p-6'>
            <div className='font-bold'>Colaboradores Cadastrados</div>
            <div className='flex flex-row justify-between'>
              <div className='text-4xl font-bold'>25</div>
              <div>
                <Link to={{ pathname: '/settings/employees' }} className='btn bg-light text-gray-800'>
                  <i className='ri-eye-line'></i>
                </Link>
              </div>
            </div>
          </div>
          <div className='bg-success h-28 text-white p-6'>
            <div className='font-bold'>Relógios de Ponto Cadastrados</div>
            <div className='flex flex-row justify-between'>
              <div className='text-4xl font-bold'>0</div>
            </div>
          </div>
        </div>
        <div>
          <SettingsMenu />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
