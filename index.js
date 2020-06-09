const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use(require('./routes/todos'))

app.listen(3000, () => { console.log('listening on port 3000') })
