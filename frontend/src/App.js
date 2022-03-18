import React from "react"

/*import { createTheme, ThemeProvider } from '@mui/material'*/

import Root from "./Root";
import Header from "./components/Menu/Header";
import { AuthProvider } from "./context/AuthContext";


/*const theme = createTheme({
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500,
    fontWeightSemiBold:600,
    fontWeightBold:700
  }
})*/
function App() {

  return (
    <>
      <AuthProvider>  
        <Header />
        <Root />
      </AuthProvider>
    </>
  );
}

export default App;
