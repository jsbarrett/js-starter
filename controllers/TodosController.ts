import { todosAll } from '../views/todos/allView.ts'
import { todosModel } from '../models/todosModel.ts'

const todosController = {
  all: async (ctx: any) => {
    // ctx.response.body = 'todos all'
    const todos = await todosModel.all()
    ctx.response.body = todosAll(todos)
  },
  new: async (ctx: any) => {
    ctx.response.body = 'you are being redirected'
  },
  create: async (ctx: any) => {
    ctx.response.body = 'todos create'
  },
  edit: async (ctx: any) => {
    ctx.response.body = `todo item ${ctx.params.id} edit`
  },
  update: async (ctx: any) => {
    ctx.response.body = `UPDATING TODO ${ctx.params.id}`
  },
  delete: async (ctx: any) => {
    ctx.response.body = `todo ${ctx.params.id} delete`
  }
}

export { todosController }
