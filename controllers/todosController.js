const todosAll = (ctx) => {
  ctx.response.body = 'todos all'
}
const todosNew =  (ctx) => {
  ctx.response.body = 'you are being redirected'
}
const todosCreate = (ctx) => {
  ctx.response.body = 'todos create'
}
const todosEdit = (ctx) => {
  ctx.response.body = `todo item ${ctx.request.params.id} edit`
}
const todosUpdate = (ctx) => {
  ctx.response.body = `UPDATING TODO ${ctx.request.params.id}`
}
const todosDelete = (ctx) => {
  ctx.response.body = `todo ${ctx.request.params.id} delete`
}

const todosController = {
  all: todosAll,
  new: todosNew,
  create: todosCreate,
  edit: todosEdit,
  update: todosUpdate,
  delete: todosDelete
}

export { todosController }
