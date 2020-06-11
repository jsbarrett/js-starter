const fs = require('fs').promises
const path = require('path')
const controllerDirectoryPath = path.resolve(__dirname, '../../controllers')

const columnsFromRequest = (columns) => {
  return columns.map(x => {
    const { name, dataType } = x
    return (
`      ${name}: req.body.${name} || ${dataType.toLowerCase() === 'integer' ? 0 : "''"},`
    )
  })
}

const generateController = async ({ tableName, columns }) => {
  const text = `const { ${tableName}All } = require('../views/${tableName}/allView')
const { ${tableName}New } = require('../views/${tableName}/newView')
const { ${tableName}Edit } = require('../views/${tableName}/editView')
const { ${tableName}Model } = require('../models/${tableName}Model')

const ${tableName}Controller = {
  all: async (req, res) => {
    const ${tableName} = await ${tableName}Model.all()
    res.send(${tableName}All(${tableName}))
  },

  new: async (req, res) => {
    res.send(${tableName}New())
  },

  create: async (req, res) => {
    await ${tableName}Model.create(req.body)
    res.redirect('/${tableName}')
  },

  edit: async (req, res) => {
    const todo = await ${tableName}Model.get(req.params.id)
    res.send(${tableName}Edit(todo))
  },

  update: async (req, res) => {
    const item = {
      id: req.params.id,
${columnsFromRequest(columns).join('\n')}
    }
    try {
      await ${tableName}Model.update(item)
      res.redirect('/${tableName}')
    } catch (err) {
      console.error(err)
      res.status(500).send('oh noes there was a problem')
    }
  },

  delete: async (req, res) => {
    try {
      await ${tableName}Model.delete(req.params.id)
      res.redirect('/${tableName}')
    } catch (err) {
      console.error(err)
      res.status(500).send('oh noes there was a problem')
    }
  }
}

module.exports = { ${tableName}Controller }`

  const newControllerPath = `${controllerDirectoryPath}/${tableName}Controller.js`
  await fs.writeFile(newControllerPath, text)
}

module.exports = { generateController }
