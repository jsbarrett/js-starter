// const express = require('express')
// const app = express()
// // const bodyParser = require('body-parser')

// // app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// // app.use(require('./routes/todos'))

// app.listen(3000, () => { console.log('listening on port 3000') })

import { Application } from 'https://deno.land/x/oak/mod.ts'
import { start } from './routes/router.js'
import './routes/index.js'

const app = new Application()

app.use(start)

app.use((ctx) => {
  ctx.response.body = 'Hello World!'
})

console.log('http://localhost:3000/')
await app.listen({ port: 3000 })

// import { serve } from 'https://deno.land/std/http/server.ts'
// import './routes/index.js'
// import { start } from './routes/router.js'

// const server = serve({ port: 3000 })
// start(server)
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

