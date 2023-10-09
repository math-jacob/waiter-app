import { Board, OrdersContainer } from './style'

interface OrdersBoardProps {
  icon: string
  title: string
}

export function OrdersBoard(props: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{props.icon}</span>
        <strong>{props.title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
        <button type='button'>
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  )
}
