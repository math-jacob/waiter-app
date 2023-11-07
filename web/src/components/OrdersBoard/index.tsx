import { useState } from 'react'
import { Order } from '../../types/Order'
import { OrderModal } from '../OrderModal'
import { Board, OrdersContainer } from './style'

interface OrdersBoardProps {
  icon: string
  title: string
  orders: Array<Order>
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {

  // state para verificar se o modal foi aberto ou não
  const [isModalVisible, setIsModalVisible] = useState(false)

  function handleOpenModal() {
    setIsModalVisible(true)
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={handleOpenModal}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
