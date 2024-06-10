import * as layoutConstants from '@/constants/layout'
import { useThemeStore } from '@/stores/theme/theme.store'
import { LegacyRef } from 'react'
import SimpleBar from 'simplebar-react'
import LayoutDirection from './LayoutDirection'
import LayoutPosition from './LayoutPosition'
import LayoutTheme from './LayoutTheme'
import LayoutWidth from './LayoutWidth'
import SideBarTheme from './SideBarTheme'
import SideBarType from './SideBarType'
import TopBarTheme from './TopBarTheme'

interface ThemeCustomizerProps {
  handleRightSideBar: (value: any) => void
  rightBarNodeRef: LegacyRef<HTMLDivElement> | undefined
}

const ThemeCustomizer = ({ handleRightSideBar, rightBarNodeRef }: ThemeCustomizerProps) => {
  const {
    layoutTheme,
    layoutDirection,
    layoutWidth,
    topBarTheme,
    sideBarTheme,
    sideBarType,
    layoutPosition,
    changeLayoutTheme,
    changeLayoutDirection,
    changeLayoutWidth,
    changeTopBarTheme,
    changeSideBarTheme,
    changeSideBarType,
    changeLayoutPosition
  } = useThemeStore((state) => state)

  const handleChangeLayoutTheme = (value: string) => {
    switch (value) {
      case 'dark':
        changeLayoutTheme(layoutConstants.LayoutTheme.THEME_DARK)
        break
      default:
        changeLayoutTheme(layoutConstants.LayoutTheme.THEME_LIGHT)
        break
    }
  }

  const handleChangeLayoutDirection = (value: string) => {
    switch (value) {
      case 'rtl':
        changeLayoutDirection(layoutConstants.LayoutDirection.RIGHT_TO_LEFT)
        break
      default:
        changeLayoutDirection(layoutConstants.LayoutDirection.LEFT_TO_RIGHT)
        break
    }
  }

  const handleChangeLayoutWidth = (value: string) => {
    switch (value) {
      case 'boxed':
        changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_BOXED)
        break
      default:
        changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID)
        break
    }
  }

  const handleChangeTopBarTheme = (value: string) => {
    switch (value) {
      case 'dark':
        changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_DARK)
        break
      case 'brand':
        changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_BRAND)
        break
      default:
        changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_LIGHT)
        break
    }
  }

  const handleChangeSideBarTheme = (value: string) => {
    switch (value) {
      case 'dark':
        changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_DARK)
        break
      case 'brand':
        changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_BRAND)
        break
      default:
        changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT)
        break
    }
  }

  const handleChangeSideBarType = (value: string) => {
    switch (value) {
      case 'hover':
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVER)
        break
      case 'hover-active':
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HOVERACTIVE)
        break
      case 'sm':
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_SMALL)
        break
      case 'md':
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_COMPACT)
        break
      case 'mobile':
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_MOBILE)
        break
      case 'hidden':
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_HIDDEN)
        break
      default:
        changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT)
        break
    }
  }

  const handleChangeLayoutPosition = (value: string) => {
    switch (value) {
      case 'scrollable':
        changeLayoutPosition(layoutConstants.LayoutPosition.POSITION_SCROLLABLE)
        break
      default:
        changeLayoutPosition(layoutConstants.LayoutPosition.POSITION_FIXED)
        break
    }
  }

  const reset = () => {
    changeLayoutTheme(layoutConstants.LayoutTheme.THEME_LIGHT)
    changeLayoutDirection(layoutConstants.LayoutDirection.LEFT_TO_RIGHT)
    changeLayoutWidth(layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID)
    changeTopBarTheme(layoutConstants.TopBarTheme.TOPBAR_LIGHT)
    changeSideBarTheme(layoutConstants.SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT)
    changeSideBarType(layoutConstants.SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT)
    changeLayoutPosition(layoutConstants.LayoutPosition.POSITION_FIXED)
  }

  return (
    <>
      <div ref={rightBarNodeRef} className='h-[70px] flex items-center text-white bg-primary px-6 gap-3'>
        <h5 className='text-base flex-grow'>Configurações</h5>
        <button type='button' onClick={handleRightSideBar}>
          <i className='ri-close-line text-xl' />
        </button>
      </div>

      <SimpleBar className='h-[calc(100vh-134px)]'>
        <div className='p-5 grid grid-cols-2 gap-4'>
          <LayoutTheme
            handleChangeLayoutTheme={handleChangeLayoutTheme}
            layoutTheme={layoutTheme}
            layoutConstants={layoutConstants.LayoutTheme}
          />

          <LayoutDirection
            handleChangeLayoutDirection={handleChangeLayoutDirection}
            layoutDirection={layoutDirection}
            layoutConstants={layoutConstants.LayoutDirection}
          />

          {/* <LayoutWidth
            handleChangeLayoutWidth={handleChangeLayoutWidth}
            layoutWidth={layoutWidth}
            layoutConstants={layoutConstants.LayoutWidth}
          /> */}

          <SideBarType
            handleChangeSideBarType={handleChangeSideBarType}
            sideBarType={sideBarType}
            layoutConstants={layoutConstants.SideBarType}
          />

          <SideBarTheme
            handleChangeSideBarTheme={handleChangeSideBarTheme}
            sideBarTheme={sideBarTheme}
            layoutConstants={layoutConstants.SideBarTheme}
          />

          <TopBarTheme
            handleChangeTopBarTheme={handleChangeTopBarTheme}
            topBarTheme={topBarTheme}
            layoutConstants={layoutConstants.TopBarTheme}
          />

          {/* <LayoutPosition
            handleChangeLayoutPosition={handleChangeLayoutPosition}
            layoutPosition={layoutPosition}
            layoutConstants={layoutConstants.LayoutPosition}
          /> */}
        </div>
      </SimpleBar>
    </>
  )
}

export default ThemeCustomizer
