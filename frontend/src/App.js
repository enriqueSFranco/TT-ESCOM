import React from "react"
import Root from "./Root";
import Header from "./components/Menu/Header";
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
