import { Overlay, ModalBody, OrderDetails } from './style'
import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order'

interface OrderModalProps {
  visible: boolean
  order: Order | null
}

export function OrderModal({ visible, order }: OrderModalProps) {
  if (!visible || !order) {
    return null
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>

          <button type='button'>
            <img src={closeIcon} alt="Íconde de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>🕑</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}
