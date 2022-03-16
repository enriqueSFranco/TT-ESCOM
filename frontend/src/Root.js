import { useEffect, useState } from "react";
import { 
  Routes, 
  Route, 
  useLocation, 
  useNavigate,
} from "react-router-dom";

import PageHome from "./pages/PageHome";
import PageCompany from "./pages/PageCompany";
import PageLoginStudent from "./pages/PageLoginStudent";
import PageCreateAccount from "./pages/PageCreateAccountStudent";
import PageLoginCompany from "./pages/PageLoginCompany";
import PageRegisterCompany from "./pages/PageRegisterCompany";
import PageDetailsUser from "./pages/PageDetailsUser";
import PrivateRoute from "./routes/PrivateRoute";


const modalPages = [
  '/alumno',
  '/reclutador',
];

const Root = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true);

  // obtenemos la ruta en la que nos encontramos
  const shouldUsePreviusLocation = () => isMobile && modalPages.includes(location.pathname);

  // obtenemos la ruta anterior
  const shouldUpdatePreviousLocation = () => {
    if (!location) return false;
    return !modalPages.includes(location.pathname);
  }

  useEffect(() => {
    console.log(shouldUpdatePreviousLocation())
    if (shouldUpdatePreviousLocation()) navigate(location);

    const handleResize = () => { // fase de actualizacion
      const mobile = window.innerWidth > 800;
      if (isMobile !== mobile) {
        console.log('es version mobil: ',isMobile);
        setIsMobile(mobile);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]); // fase de montaje

  let usePreviousLocation = shouldUsePreviusLocation();
  console.log(usePreviousLocation)
  let forceLocation;

  if (usePreviousLocation) { // ponemos el modal
    forceLocation = {pathname: "/"}; // bug
    console.log(forceLocation)
  } else {
    forceLocation = location;
    console.log('forceLocation: ',forceLocation)
  }

  return (
    <>
      <Routes location={forceLocation}>
        {/* Rutas publicas */}
        <Route path="/" element={<PageHome />} />
        <Route path="/empresas" element={<PageCompany />} />
        <Route
          path="/alumno"
          element={<PageLoginStudent isMobile={isMobile} />}
        />
        <Route path="/registro-alumno" element={<PageCreateAccount />} />
        
        <Route path="/reclutador" element={<PageLoginCompany />} />
        <Route
          path="/registro-empresa"
          element={<PageRegisterCompany />}
        ></Route>
        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          {/* <Route path="/reclutador" element={<PageRecruiter />} /> */}
          <Route path="/configuracion" element={<PageDetailsUser />} />
        </Route>
      </Routes>
      {/* Rutas para el manejo de la modal */}
      <Routes>
        {usePreviousLocation && (
          <>
            <Route
              path="/alumno"
              element={<PageLoginStudent isMobile={isMobile} />}
            />
            <Route
              path="/reclutador"
              element={<PageLoginCompany isMobile={isMobile} />}
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default Root;
