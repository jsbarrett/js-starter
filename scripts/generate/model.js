const fs = require('fs').promises
const path = require('path')

const properCaseName = name => name[0].toUpperCase() + name.slice(1)

const commaSeperatedColNames = (columns) => columns.map(x => x.name).join(', ')

const makeTemplate = (tableName, columns) => {
    return `const { runSQL } = require('../db-connection')

class ${properCaseName(tableName)}Model {
  all = async () => {
    const sql = 'SELECT * FROM ${tableName}'
    const values = []
    const ${tableName} = await runSQL({ sql, values })
    return ${tableName}
  }

  create = async (${commaSeperatedColNames(columns)}) => {
    const sql = 'INSERT INTO ${tableName} (${commaSeperatedColNames(columns)}) VALUES (${columns.map(x => '?').join(', ')})'
    const values = [${commaSeperatedColNames(columns)}]
    return runSQL({ sql, values })
  }

  delete = async (id) => {
    const sql = \`DELETE FROM ${tableName} WHERE id = ?\`
    const values = [id]
    return runSQL({ sql, values })
  }

  get = async (id) => {
    const sql = 'SELECT * FROM ${tableName} WHERE id = ?'
    const values = [id]
    return runSQL({ sql, values }).then(x => x[0])
  }

  update = async (item) => {
    const sql = \`UPDATE ${tableName} SET ${columns.map(x => `${x.name} = ?`).join(', ')} WHERE id = ?\`
    const values = [${columns.map(x => `item.${x.name}`).join(', ')}, item.id]
    await runSQL({ sql, values })
  }
}

const ${tableName}Model = new ${properCaseName(tableName)}Model()

module.exports = { ${tableName}Model }`
}

const generateModel = async ({ tableName, columns }) => {
  const modelsPath = path.resolve(__dirname, '../../models')
  const filePath = modelsPath + '/' + tableName + 'Model.js'
  const template = makeTemplate(tableName, columns)
  await fs.writeFile(filePath, template)
}

module.exports = { generateModel }