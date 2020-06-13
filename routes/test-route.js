import { router } from './router.js'

const todosAll = (req) => {
  req.respond({ body: 'todos all' })
}
const todosNew = (req) => {
  req.respond({ body: 'todos new' })
}
const todosCreate = (req) => {
  req.respond({ body: 'todos create' })
}
const todosEdit = (req) => {
  req.respond({ body: `todo item ${req.params.id} edit` })
}
const todosUpdate = (req) => {
  req.respond({ body: `UPDATING TODO ${req.params.id}` })
}
const todosDelete = (req) => {
  req.respond({ body: `todo ${req.params.id} delete` })
}

router.get('/todos', todosAll)
router.get('/todos/new', todosNew)
router.post('/todos/create', todosCreate)
router.get('/todos/:id/edit', todosEdit)
router.post('/todos/:id/update', todosUpdate)
router.post('/todos/:id/delete', todosDelete)

