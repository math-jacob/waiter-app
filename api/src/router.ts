import { Router } from 'express'
import { listCategories } from './app/useCases/categories/listCategories'
import { createCategory } from './app/useCases/categories/createCategory'
import { createProduct } from './app/useCases/products/createProducts'
import { listProducts } from './app/useCases/products/listProducts'

export const router = Router()

// List categories
router.get('/categories', listCategories)

// Create category
router.post('/categories', createCategory)

// List products
router.get('/products', listProducts)

// Create product
router.post('/products', createProduct)

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK')
})

// List orders
router.get('/orders', (req, res) => {
  res.send('OK')
})

// Create order
router.post('/orders', (req, res) => {
  res.send('OK')
})

/**
  put vs patch

  put
  - Alteração completa
  - Altera todas as propriedades da entidade

  patch
  - Alteração incompleta
  - Muda somente uma ou poucas propriedades
*/
// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK')
})

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK')
})
