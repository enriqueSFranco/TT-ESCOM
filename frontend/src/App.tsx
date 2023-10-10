import { ThemeProvider } from 'context/ThemeContext'
import { LayoutMenu } from './layouts/LayoutMenu'
import { Root } from './Root'


function App () {
  return (
    <LayoutMenu>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </LayoutMenu>

  )
}

export default App
