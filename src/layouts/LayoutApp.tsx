import { MenuProvider } from '../context/MenuContext'
import { AsideMenu } from '../components/AsideMenu'
import { Header } from '../components/Header'

interface LayoutAppProps {
  children: React.ReactNode
}

export const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <div className='w-full h-screen'>
      <MenuProvider>
        <Header />
        <AsideMenu />
      </MenuProvider>
      {children}
    </div>
  )
}
