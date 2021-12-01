const express = require('express')
const cors = require('cors')
const connectDB = require('./startup/db')

const products = require('./routes/products')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/products', products)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})

