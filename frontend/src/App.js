import React from "react"

import Header from "./components/Menu/Header";
import Root from "./Root";


import { AuthProvider } from "./context/AuthContext";

import "./App.css";

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
