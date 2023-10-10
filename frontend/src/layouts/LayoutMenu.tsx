import { MenuProvider } from "../context/MenuContext"
import { Header } from "../components/Header"

interface Props {
  children: React.ReactNode
}

export const LayoutMenu: React.FC<Props> = ({ children }) => {

  return (
    <div className="w-full h-screen flex flex-col">
      <MenuProvider>
        <Header />
      </MenuProvider>
      {children}
    </div>
  );
};

