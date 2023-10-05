import { model, Schema } from 'mongoose'

// Criando a entidade Category
export const Categorey = model('Category', new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
}))
