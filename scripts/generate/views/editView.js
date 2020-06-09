const editView = ({ tableName, columns }) => `const { baseHTML } = require('../baseHTML')

const ${tableName}Edit = x => {
  const content = \`
    <div class="flex">
      <form method="post" action="/${tableName}/\${x.id}/update">
${columns.map(column => { return `      <input class="px-4 border border-blue-500 py-2" name="${column.name}" value="\${x.${column.name}}">` }).join('')}
        <button class="font-semibold border border-green-400 bg-green-400 text-white py-2 px-8" type="submit">Update</button>
      </form>
      <form method="post" action="/${tableName}/\${x.id}/delete">
        <button class="font-semibold border border-red-400 bg-red-400 text-white py-2 px-8" type="submit">Delete</button>
      </form>
    </div>
  \`

  return baseHTML(content)
}

module.exports = { ${tableName}Edit }`

module.exports = { editView }