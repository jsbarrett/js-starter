const router = require('express').Router()
const { todosController } = require('../controllers/todosController')

router.get('/todos', todosController.all)
router.get('/todos/new', todosController.new)
router.post('/todos/create', todosController.create)
router.get('/todos/:id/edit', todosController.edit)
router.post('/todos/:id/update', todosController.update)
router.post('/todos/:id/delete', todosController.delete)

module.exports = router