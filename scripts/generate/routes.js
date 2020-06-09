const fs = require('fs').promises
const path = require('path')
const routeDirectoryPath = path.resolve(__dirname, '../../routes')
const generateRoutes = async (tableName) => {
  const text = `const router = require('express').Router()
const { ${tableName}Controller } = require('../controllers/${tableName}Controller')

router.get('/${tableName}', ${tableName}Controller.all)
router.get('/${tableName}/new', ${tableName}Controller.new)
router.post('/${tableName}/create', ${tableName}Controller.create)
router.get('/${tableName}/:id/edit', ${tableName}Controller.edit)
router.post('/${tableName}/:id/update', ${tableName}Controller.update)
router.post('/${tableName}/:id/delete', ${tableName}Controller.delete)

module.exports = router`
  const newRoutePath = `${routeDirectoryPath}/${tableName}.js`
  await fs.writeFile(newRoutePath, text)
}

module.exports = { generateRoutes }