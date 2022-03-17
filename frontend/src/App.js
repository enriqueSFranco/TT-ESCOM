import Header from "./components/Menu/Header";
import Root from "./Root";
import React from "react";

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
