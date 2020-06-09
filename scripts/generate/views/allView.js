const allView = ({ tableName, columns }) => `const { baseHTML } = require('../baseHTML')

const Item = x => {
  return \`
    <a href="/${tableName}/\${x.id}/edit">
      <li class="hover:bg-gray-100">
        \${x.id}
      </li>
    </a>
  \`
}

const ${tableName}All = xs => {
  const content = \`
    <a href="/${tableName}/new">
      <button class="bg-blue-500 text-white px-8 py-2 rounded">
        Create New
      </button>
    </a>
    <h1 class="text-4xl">${tableName}</h1>
    <ul>
      \${xs.map(Item).join('')}
    </ul>
  \`
  return baseHTML(content)
}

module.exports = { ${tableName}All }`

module.exports = { allView }