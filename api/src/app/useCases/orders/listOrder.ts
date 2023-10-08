import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function listOrder(req: Request, res: Response) {
  try {
    const orders = await Order.find()

    res.json(orders)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}
