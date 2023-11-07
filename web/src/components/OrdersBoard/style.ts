import styled from 'styled-components'

export const Board = styled.div`
  flex: 1;
  padding: 16px;

  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  // O seguinte estilo só vai se aplicar para headers que são filhos diretos do componente Board
  > header {
    padding: 8px;
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const OrdersContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 24px;

  button {
    width: 100%;
    height: 128px;
    background: #fff;

    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    // Toda vez que um elemento button for precedido de outro button aplicar a estilização abaixo
    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
`
