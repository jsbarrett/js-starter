const fs = require('fs').promises
const path = require('path')

const generateColumn = (x) => {
  const [columnName, dataType, required] = x.split(':')
  return `${columnName} ${dataType} ${required === 'required' ? 'NOT NULL' : ''}`
}

const generateMigration = async ({ tableName, columns }) => {
  const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
${columns.map(x => (`  ${generateColumn(x)}`)).join(',\n')}
)`
  const migrationFilePath = path.resolve(__dirname, `../../migrations/${tableName}.sql`)

  await fs.writeFile(migrationFilePath, sql)
  console.log(sql)
}

module.exports = { generateMigration }
