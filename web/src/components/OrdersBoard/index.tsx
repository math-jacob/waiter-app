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

  // state para controlar qual pedido o usuario clicou e passar para o componente OrderModal
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  function handleOpenModal(order: Order) {
    setIsModalVisible(true)
    setSelectedOrder(order)
  }

  function handleCLoseModal() {
    setIsModalVisible(false)
    setSelectedOrder(null)
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCLoseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  )
}
