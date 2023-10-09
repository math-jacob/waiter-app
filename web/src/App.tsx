import { GlobalStyles } from './styles/GlobalStyles'

/**
 * React Fragment <> </> é utilizado para contornar a regra JSX:
 * Não pode ter elementos irmão adjacentes sem ter um pai por fora
*/

export function App() {
  return (
    <>
      <GlobalStyles />
      <h1>Hello world</h1>
    </>
  )
}
