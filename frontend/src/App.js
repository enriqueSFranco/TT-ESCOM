import React from "react"

import Header from "./components/Menu/Header";
import Root from "./Root";


import { AuthProvider } from "./context/AuthContext";

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
