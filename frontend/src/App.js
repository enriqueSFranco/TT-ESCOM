import React from "react"
import Root from "./Root";
import Header from "components/Menu/Header";
import { ThemeProvider } from "context/ThemeContext";
import { AuthProvider } from "context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Header />
          <Root />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
