import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function listOrder(req: Request, res: Response) {
  try {
    // populate traz todas as informações de determinada entidade ao invés de somente o ID
    const orders = await Order.find().populate('products.product')

    res.json(orders)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}
