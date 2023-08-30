import { AsideMenu } from "../components/FloatingMenu"
import { Header } from "../components/Header"

interface Props {
  children: React.ReactNode
}

export const LayoutMenu: React.FC<Props> = ({ children }) => {

  return (
    <div className="w-full h-screen min-h-screen flex flex-col">
      <Header />
      <AsideMenu />
      {children}
    </div>
  );
};

