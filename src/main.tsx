import '@/locales/index.ts'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Spinner from './components/Spinner.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)
