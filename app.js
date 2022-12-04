const express = require('express')
const app = express()
// const cors = require('cors')
const port = 3001
const products = require('./products')

// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products', (req, res) => {
  res.send(products)
})
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(product => product.id === id)
  res.send(product)
})
app.get('*', (req, res) => {
  res.send('404 not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})