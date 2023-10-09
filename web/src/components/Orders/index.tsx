import { Container } from './style'

import { OrdersBoard } from '../OrdersBoard/index'

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
      />

      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
      />

      <OrdersBoard
        icon="✅"
        title="Pronto!"
      />
    </Container>
  )
}
