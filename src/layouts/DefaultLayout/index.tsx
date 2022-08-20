import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <ToastContainer />
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
