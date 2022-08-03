import Menu from "./components/Menu/Menu"
import Root from "./Root"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <AuthProvider>
      <Root />
    </AuthProvider>
  )
}

export default App
