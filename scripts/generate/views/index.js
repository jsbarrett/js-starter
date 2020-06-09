const path = require('path')
const fs = require('fs').promises

const viewDirectoryPath = path.resolve(__dirname, '../../../views')

const { newView } = require('./newView')
const { editView } = require('./editView')
const { allView } = require('./allView')

async function generateViews ({ tableName, columns }) {
  await fs.mkdir(viewDirectoryPath + '/' + tableName)

  const newViewPath = `${viewDirectoryPath}/${tableName}/newView.js`
  await fs.writeFile(newViewPath, newView({ tableName, columns }))

  const editViewPath = `${viewDirectoryPath}/${tableName}/editView.js`
  await fs.writeFile(editViewPath, editView({ tableName, columns }))

  const allViewPath = `${viewDirectoryPath}/${tableName}/allView.js`
  await fs.writeFile(allViewPath, allView({ tableName, columns }))
}

module.exports = { generateViews }