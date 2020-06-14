import * as path from 'https://deno.land/std/path/mod.ts'
import { dirname } from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts'

const routeDirectoryPath = path.resolve(dirname(import.meta), '../../routes/definitions')
const generateRoutes = async (tableName) => {
  const text = `import { router } from '../router.js'
import { ${tableName}Controller } from '../../controllers/${tableName}Controller.js'

router.get('/${tableName}', ${tableName}Controller.all)
router.get('/${tableName}/new', ${tableName}Controller.new)
router.post('/${tableName}/create', ${tableName}Controller.create)
router.get('/${tableName}/:id/edit', ${tableName}Controller.edit)
router.post('/${tableName}/:id/update', ${tableName}Controller.update)
router.post('/${tableName}/:id/delete', ${tableName}Controller.delete)`

  const newRoutePath = `${routeDirectoryPath}/${tableName}.js`
  await Deno.writeTextFile(newRoutePath, text)
}

export { generateRoutes }
