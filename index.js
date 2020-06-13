// const express = require('express')
// const app = express()
// // const bodyParser = require('body-parser')

// // app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// // app.use(require('./routes/todos'))

// app.listen(3000, () => { console.log('listening on port 3000') })

import { serve } from 'https://deno.land/std/http/server.ts'
import './routes/test-route.js'
import { start } from './routes/router.js'

const server = serve({ port: 3000 })
start(server)
console.log('http://localhost:3000/')
// for await (const req of server) {

  // switch (req.url) {
  //   case '/': {
  //     req.respond({ body: 'This is home' })
  //     break
  //   }
  //   case '/foo': {
  //     req.respond({ body: 'This is foo' })
  //     break
  //   }
  //   case '/bar': {
  //     req.respond({ body: 'This is bar' })
  //     break
  //   }
  //   default: {
  //     req.respond({ body: 'Hello World\n' })
  //   }
  // }
// }

