const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())

let items = [
  {id: 1, title: 'Hello World'},
  {id: 2, title: 'Goodbye World'},
  {id: 3, title: 'Hello world, again'},
]

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/items', (req, res) => {
  res.json(items)
})

app.delete('/items/:url', (req, res) => {
  const id = req.params.url
  console.log('deleting id: ', id)

  const newItems = items.filter(item => (item.id != id))
  items = newItems;

  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})
