import { Header } from '../components/Header'

type Props = {
  children: React.ReactNode
}

export const LayoutMenu: React.FC<Props> = ({ children }) => {

  return (
    <div className='w-full h-screen flex flex-col'>
      <Header />
      {children}
    </div>
  );
};

