import React from "react"
import Root from "./Root";
import Header from "./components/Menu/Header";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <>
      <AuthProvider>  
        <Header />
        <Root />
      </AuthProvider>
      <Footer />
    </>
  );
}

export default App;
