const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors("*"))

app.get('/', (req, res) => {
  res.json({ message: 'Hello World 2024' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
