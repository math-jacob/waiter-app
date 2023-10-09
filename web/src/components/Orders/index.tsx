import { Container } from './style'

import { OrdersBoard } from '../OrdersBoard/index'
import { Order } from '../../types/Order'

const orders: Array<Order> = [
  {
    '_id': '6522dfe4066f75466a3a1ea9',
    'table': '3',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1696782589811-coca-cola.png',
          'price': 7,
        },
        'quantity': 1,
        '_id': '6522dfe4066f75466a3a1eaa'
      },
    ],
  }
]

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon='🕑'
        title='Fila de espera'
        orders={orders}
      />

      <OrdersBoard
        icon='👩‍🍳'
        title='Em preparação'
        orders={[]}
      />

      <OrdersBoard
        icon='✅'
        title='Pronto!'
        orders={[]}
      />
    </Container>
  )
}
