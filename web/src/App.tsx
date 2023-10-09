import { GlobalStyles } from './styles/GlobalStyles'

import { Header } from './components/Header/index'
import { Orders } from './components/Orders/index'
/**
 * React Fragment <> </> é utilizado para contornar a regra JSX:
 * Não pode ter elementos irmão adjacentes sem ter um pai por fora
*/

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  )
}
