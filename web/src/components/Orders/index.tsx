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
  },
  {
    '_id': '654a47176eb74f7e1614bc9f',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1696781358318-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '654a47176eb74f7e1614bca0'
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
