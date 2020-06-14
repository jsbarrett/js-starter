import * as path from 'https://deno.land/std/path/mod.ts'
import { dirname } from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts'
const controllerDirectoryPath = path.resolve(dirname(import.meta), '../../controllers')

const columnsFromRequest = (columns) => {
  return columns.map(x => {
    const { name, dataType } = x
    return (
`      ${name}: req.body.${name} || ${dataType.toLowerCase() === 'integer' ? 0 : "''"},`
    )
  })
}

const generateController = async ({ tableName, columns }) => {
  const text = `import { ${tableName}All } from '../views/${tableName}/allView'
import { ${tableName}New } from '../views/${tableName}/newView'
import { ${tableName}Edit } from '../views/${tableName}/editView'
import { ${tableName}Model } from '../models/${tableName}Model'

const ${tableName}Controller = {
  all: async (req) => {
    const ${tableName} = await ${tableName}Model.all()
    req.respond({ body: ${tableName}All(${tableName}) })
  },

  new: async (req) => {
    req.respond({ body: ${tableName}New() })
  },

  create: async (req) => {
    await ${tableName}Model.create(req.body)
    // req.redirect('/${tableName}')
  },

  edit: async (req) => {
    const todo = await ${tableName}Model.get(req.params.id)
    req.respond({ body: ${tableName}Edit(todo) })
  },

  update: async (req) => {
    const item = {
      id: req.params.id,
${columnsFromRequest(columns).join('\n')}
    }
    try {
      await ${tableName}Model.update(item)
      // req.redirect('/${tableName}')
    } catch (err) {
      console.error(err)
      // req.status(500).send('oh noes there was a problem')
    }
  },

  delete: async (req) => {
    try {
      await ${tableName}Model.delete(req.params.id)
      // req.redirect('/${tableName}')
    } catch (err) {
      console.error(err)
      // req.status(500).send('oh noes there was a problem')
    }
  }
}

export { ${tableName}Controller }`

  const newControllerPath = `${controllerDirectoryPath}/${tableName}Controller.js`
  await Deno.writeTextFile(newControllerPath, text)
}

export { generateController }
