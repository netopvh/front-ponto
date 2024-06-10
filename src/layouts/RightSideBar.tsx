import { useThemeStore } from '@/stores/theme/theme.store'
import React, { useRef } from 'react'

import { OffcanvasLayout } from '@/components/HeadlessUI'
import ThemeCustomizer from '@/components/ThemeCustomizer'

const RightSideBar = () => {
  const rightBarNodeRef: any = useRef(null)
  const { isOpenRightSideBar, hideRightSideBar } = useThemeStore((state) => state)

  const handleRightSideBar = () => {
    hideRightSideBar()
  }

  return (
    <React.Fragment>
      <OffcanvasLayout
        open={isOpenRightSideBar}
        toggleOffcanvas={handleRightSideBar}
        sizeClassName='max-w-72 w-72'
        placement='end'
      >
        <ThemeCustomizer handleRightSideBar={handleRightSideBar} rightBarNodeRef={rightBarNodeRef} />
      </OffcanvasLayout>
    </React.Fragment>
  )
}

export default RightSideBar
