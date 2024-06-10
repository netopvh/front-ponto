import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface MainLayout {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <Stack>
      <Typography color={'green'}>Main layout</Typography>
      <div>{children}</div>
    </Stack>
  )
}

export default MainLayout
