import React from "react"
import Root from "./Root";
import { ThemeProvider } from "context/ThemeContext";
import { AuthProvider } from "context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
