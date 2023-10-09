import { GlobalStyles } from './styles/GlobalStyles'
import { Header } from './components/Header/index'

/**
 * React Fragment <> </> é utilizado para contornar a regra JSX:
 * Não pode ter elementos irmão adjacentes sem ter um pai por fora
*/

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  )
}
