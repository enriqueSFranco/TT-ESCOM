import { MenuProvider } from '../context/MenuContext'
import { Header } from '../components/Header'

interface LayoutAppProps {
  children: React.ReactNode
}

export const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <div className='w-full h-full flex flex-col justify-between gap-4 p-4'>
      <MenuProvider>
        <Header />
      </MenuProvider>
      {children}
    </div>
  )
}
