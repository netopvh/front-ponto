import LogoBox from '@/components/LogoBox'
import { SideBarType } from '@/constants/layout'
import { getMenuItems } from '@/helpers/menu'
import { useThemeStore } from '@/stores/theme/theme.store'
import React, { useRef } from 'react'
import SimpleBar from 'simplebar-react'
import AppMenu from './main/Menu'

const SideBarContent = () => {
  return (
    <div>
      <div className='mt-4'>
        <AppMenu menuItems={getMenuItems(false)} />
      </div>
      <div className='absolute bottom-0 w-full'>
        <hr className='bg-gray-600 dark:bg-gray-700' />
        <AppMenu menuItems={getMenuItems(true)} />
      </div>
    </div>
  )
}

interface LeftSideBarProps {
  isCondensed: boolean
  isLight: boolean
  hideUserProfile: boolean
  hideLogo?: boolean
}

const LeftSideBar = ({ hideLogo }: LeftSideBarProps) => {
  const { sideBarType, changeSideBarType } = useThemeStore((state) => state)

  const menuNodeRef = useRef<HTMLDivElement>(null)

  const handleHoverMenu = () => {
    if (sideBarType === 'hover') {
      changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE)
    } else if (sideBarType === 'hover-active') {
      changeSideBarType(SideBarType.LEFT_SIDEBAR_TYPE_HOVER)
    }
  }

  return (
    <React.Fragment>
      <div className='app-menu' ref={menuNodeRef}>
        {!hideLogo && <LogoBox />}

        <button
          id='button-hover-toggle'
          className='absolute top-5 end-2 rounded-full p-1.5 z-50'
          onClick={handleHoverMenu}
        >
          <span className='sr-only'>Menu Toggle Button</span>
          <i className='ri-checkbox-blank-circle-line text-xl'></i>
        </button>

        <SimpleBar className='scrollbar'>
          <SideBarContent />
        </SimpleBar>
      </div>
    </React.Fragment>
  )
}

export default LeftSideBar
