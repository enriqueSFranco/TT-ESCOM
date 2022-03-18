import React from "react"

import { createTheme, ThemeProvider } from '@mui/material'


import Header from "./components/Menu/Header";
import Root from "./Root";


import { AuthProvider } from "./context/AuthContext";

import "./App.css";

const theme = createTheme({
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500,
    fontWeightSemiBold:600,
    fontWeightBold:700
  }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>  
        <Header />
        <Root />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
