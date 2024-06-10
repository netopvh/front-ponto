import {
  LayoutDirection,
  LayoutPosition,
  LayoutTheme,
  LayoutWidth,
  SideBarTheme,
  SideBarType,
  TopBarTheme
} from '@/constants/layout'
import { createJSONStorage, persist } from 'zustand/middleware'
import { createStore } from '..'

interface IThemeStore {
  layoutTheme: LayoutTheme
  layoutDirection: LayoutDirection
  layoutWidth: LayoutWidth
  topBarTheme: TopBarTheme
  sideBarTheme: SideBarTheme
  sideBarType: SideBarType
  layoutPosition: LayoutPosition
  isOpenRightSideBar: boolean
  changeLayoutTheme: (theme: LayoutTheme) => void
  changeLayoutDirection: (direction: LayoutDirection) => void
  changeLayoutWidth: (width: LayoutWidth) => void
  changeTopBarTheme: (theme: TopBarTheme) => void
  changeSideBarTheme: (theme: SideBarTheme) => void
  changeSideBarType: (type: SideBarType) => void
  changeLayoutPosition: (position: LayoutPosition) => void
  showRightSideBar: () => void
  hideRightSideBar: () => void
}

const initialState = {
  layoutTheme: LayoutTheme.THEME_LIGHT,
  layoutDirection: LayoutDirection.LEFT_TO_RIGHT,
  layoutWidth: LayoutWidth.LAYOUT_WIDTH_FLUID,
  topBarTheme: TopBarTheme.TOPBAR_LIGHT,
  sideBarTheme: SideBarTheme.LEFT_SIDEBAR_THEME_LIGHT,
  sideBarType: SideBarType.LEFT_SIDEBAR_TYPE_DEFAULT,
  layoutPosition: LayoutPosition.POSITION_FIXED,
  isOpenRightSideBar: false
}

export const useThemeStore = createStore<IThemeStore>(
  'ThemeStore',
  persist(
    (set) => ({
      ...initialState,
      changeLayoutTheme: (theme: LayoutTheme) =>
        set((state) => {
          state.layoutTheme = theme
        }),
      changeLayoutDirection: (direction: LayoutDirection) =>
        set((state) => {
          state.layoutDirection = direction
        }),
      changeLayoutWidth: (width: LayoutWidth) =>
        set((state) => {
          state.layoutWidth = width
        }),
      changeTopBarTheme: (theme: TopBarTheme) =>
        set((state) => {
          state.topBarTheme = theme
        }),
      changeSideBarTheme: (theme: SideBarTheme) =>
        set((state) => {
          state.sideBarTheme = theme
        }),
      changeSideBarType: (type: SideBarType) =>
        set((state) => {
          state.sideBarType = type
        }),
      changeLayoutPosition: (position: LayoutPosition) =>
        set((state) => {
          state.layoutPosition = position
        }),
      showRightSideBar: () =>
        set((state) => {
          state.isOpenRightSideBar = true
        }),
      hideRightSideBar: () =>
        set((state) => {
          state.isOpenRightSideBar = false
        })
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
