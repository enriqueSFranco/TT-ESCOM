import { 
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import Header from "./components/Menu/Header";
import PageHome from "./pages/PageHome";
import PageCompany from "./pages/PageCompany";
import PageLogin from "./pages/PageLogin";
import PageCreateAccount from "./pages/PageCreateAccount";
import PageRecruiter from "./pages/PageRecruiter";
import { AuthProvider } from "./context/AuthContext";
import PageDetailsUser from "./pages/PageDetailsUser";
// import PageDashBoard from "./pages/PageDashBoard";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>  
        <Header />
        <Routes>
          {/* Rutas publicas */}
          <Route path="/" element={<PageHome />}/>
          <Route path="/empresas" element={<PageCompany />} />
            <Route path="/nueva-cuenta" element={<PageCreateAccount />} />
          <Route path="/iniciar-sesion" element={<PageLogin />} />
          {/* Rutas privadas */}
          <Route element={<PrivateRoute />}>
            <Route path="/reclutador" element={<PageRecruiter />} />
            <Route path="/configuracion" element={<PageDetailsUser />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
