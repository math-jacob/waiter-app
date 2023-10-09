import styled from 'styled-components'

export const Container = styled.header`
  height: 198px;
  background: #D73035;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  // Caso o usuario tenha uma tela menor que 1216px, ocupará a tela toda
  // Caso ele tenha uma tela maior que 1216px, ocupará somente 1216px
  width: 100%;
  max-width: 1216px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1{
      color: #fff;
      font-size: 32px;
    }

    h2{
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`
