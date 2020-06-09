const router = require('express').Router()
const { testTableController } = require('../controllers/testTableController')

router.get('/testTable', testTableController.all)
router.get('/testTable/new', testTableController.new)
router.post('/testTable/create', testTableController.create)
router.get('/testTable/:id/edit', testTableController.edit)
router.post('/testTable/:id/update', testTableController.update)
router.post('/testTable/:id/delete', testTableController.delete)

module.exports = router