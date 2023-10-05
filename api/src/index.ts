import express from 'express'

const app = express()

const port = 3001
app.listen(3001, () => {
  console.log(`🚀 Server running on port http://localhost:${port}`)
})
