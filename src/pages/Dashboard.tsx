import React from 'react'

// components
const StatisticsWidget = React.lazy(() => import('@/components/Widgets/StatisticsWidget'))
const PageBreadcrumb = React.lazy(() => import('@/components/PageBreadcrumb'))

const DashboardPage = () => {
  return (
    <>
      <PageBreadcrumb title='Página inicial' />

      <div className='grid 2xl:grid-cols-3 lg:grid-cols-6 md:grid-cols-2 gap-6 mb-6'>
        <div className='2xl:col-span-1 lg:col-span-2'>
          <StatisticsWidget
            variant={'bg-success'}
            cardTitle={'Colaboradores'}
            title={'Número de funcionários registrados'}
            change={'5'}
            stats={'25'}
            dataSince={'Desde o último mês'}
            classname={'apex-charts'}
            chartSeries={[20, 5]}
            colors={['#47ad77', '#e3e9ee']}
          />
        </div>
        <div className='2xl:col-span-1 lg:col-span-2'>
          <StatisticsWidget
            variant={'bg-danger'}
            cardTitle={'Ativos'}
            title={'Número de funcionários ativos'}
            change={'3'}
            stats={'22'}
            dataSince={'Neste mês'}
            classname={'apex-charts'}
            chartSeries={[22, 3]}
            colors={['#3e60d5', '#e3e9ee']}
          />
        </div>
        <div className='2xl:col-span-1 lg:col-span-2'>
          <StatisticsWidget
            variant={'bg-success'}
            cardTitle={'Férias'}
            title={'Número de funcionários com ferias'}
            change={'22'}
            stats={'3'}
            dataSince={'Neste mês'}
            classname={'apex-charts'}
            chartSeries={[3, 22]}
            colors={['#16a7e9', '#e3e9ee']}
          />
        </div>
      </div>
    </>
  )
}

export default DashboardPage
