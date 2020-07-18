import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { router as todosRoutes } from './routes/todos.ts'

const app = new Application()

const router = new Router()
router.get('/', ctx => {
  ctx.response.body = 'hello'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(todosRoutes.routes())
app.use(todosRoutes.allowedMethods())

console.log('server listening on port 3000')
await app.listen({ port: 3000 })
