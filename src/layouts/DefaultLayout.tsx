import { useThemeStore } from '@/stores/theme/theme.store'
import { changeHTMLAttribute } from '@/utils'
import { Suspense, useEffect } from 'react'

const loading = () => <div />

interface DefaultLayoutProps {
  layout: {
    layoutWidth: string
    sideBarTheme: string
    sideBarType: string
  }
  children?: any
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const layoutTheme = useThemeStore((state) => state.layoutTheme)

  useEffect(() => {
    changeHTMLAttribute('data-mode', layoutTheme)
  }, [layoutTheme])

  // get the child view which we would like to render
  const children = props['children'] || null

  return (
    <>
      <Suspense fallback={loading()}>{children}</Suspense>
    </>
  )
}

export default DefaultLayout
