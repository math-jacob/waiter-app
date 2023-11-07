import { Overlay } from './style'

interface OrderModalProps {
  visible: boolean
}

export function OrderModal({ visible }: OrderModalProps) {
  if (!visible) {
    return null
  }

  return (
    <Overlay>
      <h1>Order Modal</h1>
    </Overlay>
  )
}
