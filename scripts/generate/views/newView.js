const newView = ({ tableName, columns }) => `const { baseHTML } = require('../baseHTML')

const ${tableName}New = () => {
  const content = \`
    <form method="post" action="/${tableName}/create">
${columns.map(column => { return `      <input class="px-4 border border-blue-500 py-2" name="${column.name}">` }).join('\n')}
      <button class="font-semibold border border-green-400 bg-green-400 text-white py-2 px-8" type="submit">Create</button>
    </form>
  \`

  return baseHTML(content)
}

module.exports = { ${tableName}New }`

module.exports = { newView }