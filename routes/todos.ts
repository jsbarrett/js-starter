import { Router } from 'https://deno.land/x/oak/mod.ts'
import { todosController } from '../controllers/TodosController.ts'
const router = new Router()

router.get('/todos', todosController.all)
router.post('/todos/create', todosController.create)
router.get('/todos/:id/edit', todosController.edit)
router.post('/todos/:id/update', todosController.update)
router.post('/todos/:id/delete', todosController.delete)

export { router }
