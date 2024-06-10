import { ApexOptions } from 'apexcharts'
import ReactApexCharts from 'react-apexcharts'
import { Link } from 'react-router-dom'

import avatar1 from '@/assets/images/users/avatar-1.jpg'

//Stores
import DonutChart from '@/components/Charts/DonutChart'
import { useAuthStore } from '@/stores/auth.store'

const ProfilePage = () => {
  const apexOpts: ApexOptions = {
    chart: {
      height: 72,
      width: 72,
      type: 'donut'
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%'
        }
      }
    },
    stroke: {
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#47ad77', '#e3e9ee']
  }

  const user = useAuthStore((state) => state.auth?.user)

  return (
    <>
      <div className='grid xl:grid-cols-12 lg:grid-cols-12 grid-cols-1 gap-6'>
        <div className='xl:col-span-6 lg:col-span-5'>
          <div className='card text-center p-6 mb-6'>
            <img
              src={avatar1}
              alt=''
              className='w-24 rounded-full p-1 border border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600 mx-auto'
            />
            <h4 className='mb-1 mt-3 text-lg'>{user?.name}</h4>
            <p className='text-gray-400 mb-4'>{user?.level}</p>
            <hr className='mb-4' />
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='text-start mb-3 md:mb-0'>
                <h4 className='text-sm uppercase mb-2.5'>Administração</h4>
                <div className='flex flex-row items-center mb-0.5'>
                  <div className='w-3 h-3 rounded-full bg-success mr-2'></div>
                  <div>Em Jornada</div>
                </div>
                <div className='flex flex-row items-center'>
                  <div>
                    <i className='ri-user-3-line mr-2'></i>
                  </div>
                  <div>Gestão de Pessoas</div>
                </div>
                <div className='flex flex-row items-center'>
                  <div>
                    <i className='ri-mail-fill mr-2'></i>
                  </div>
                  <div>{user?.email}</div>
                </div>
              </div>
              <div className='bg-success text-white rounded-md py-5 px-4 text-center'>
                <div className='grid grid-cols-3 items-center'>
                  <div className='text-5xl font-bold'>
                    <i className='ri-time-line'></i>
                  </div>
                  <div className='text-sm col-span-2'>
                    <div className='font-bold text-md'>Saída de Banco de Horas</div>
                    <div className='text-4xl font-bold'>00:00</div>
                  </div>
                </div>
              </div>
            </div>

            <ul className='social-list list-inline mt-6 '>
              <li className='me-2 inline-block'>
                <Link to='' className='h-8 w-8 leading-7 block border-2 rounded-full border-primary text-primary'>
                  <i className='ri-facebook-circle-fill'></i>
                </Link>
              </li>
              <li className='me-2 inline-block'>
                <Link to='' className='h-8 w-8 leading-7 block border-2 rounded-full border-danger text-danger'>
                  <i className='ri-google-fill'></i>
                </Link>
              </li>
              <li className='me-2 inline-block'>
                <Link to='' className='h-8 w-8 leading-7 block border-2 rounded-full border-info text-info'>
                  <i className='ri-twitter-fill'></i>
                </Link>
              </li>
              <li className='me-2 inline-block'>
                <Link to='' className='h-8 w-8 leading-7 block border-2 rounded-full border-secondary text-secondary'>
                  <i className='ri-github-fill'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='xl:col-span-6 lg:col-span-7'>
          <div className='card p-6'>
            <h3 className='text-lg'>Pontualidade</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-end'>
              <div>
                <DonutChart percentage={60} />
              </div>
              <div className='flex flex-col col-span-2'>
                <div className='flex items-center mb-2'>
                  <div className='px-3 mr-2 py-1 rounded-sm bg-primary text-white'>00:00</div>
                  <div className='font-bold'>Total de horas trabalhadas</div>
                </div>
                <div className='flex items-center'>
                  <div className='px-3 mr-2 py-1 rounded-sm bg-primary text-white'>00:00</div>
                  <div className='font-bold'>Total de horas faltantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
