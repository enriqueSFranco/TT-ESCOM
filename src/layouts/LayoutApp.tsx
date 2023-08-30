import { MenuProvider } from '../context/MenuContext'
import { FloatingMenu } from '../components/FloatingMenu'
import { Header } from '../components/Header'

interface LayoutAppProps {
  children: React.ReactNode
}

export const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <div className='w-full h-screen'>
      <MenuProvider>
        <Header />
        <FloatingMenu />
      </MenuProvider>
      {children}
    </div>
  )
}
