import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './globalStyles.ts'
import { Tema } from './components/Theme/themes'
import { GlobalStyles } from './globalStyles'

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <GlobalStyles />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
