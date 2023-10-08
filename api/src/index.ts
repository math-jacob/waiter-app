import path from 'node:path'
import express from 'express'
import mongoose from 'mongoose'

import { router } from './router'

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB')

    const app = express()
    const port = 3001

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json())
    app.use(router)

    app.listen(3001, () => {
      console.log(`🚀 Server running on port http://localhost:${port}`)
    })
  })
  .catch(() => console.log('Failed to connect to MongoDB'))
