const { baseHTML } = require('../baseHTML')

const Item = x => {
  return `
    <a href="/testTable/${x.id}/edit">
      <li class="hover:bg-gray-100">
        ${x.id}
      </li>
    </a>
  `
}

const testTableAll = xs => {
  const content = `
    <a href="/testTable/new">
      <button class="bg-blue-500 text-white px-8 py-2 rounded">
        Create New
      </button>
    </a>
    <h1 class="text-4xl">testTable</h1>
    <ul>
      ${xs.map(Item).join('')}
    </ul>
  `
  return baseHTML(content)
}

module.exports = { testTableAll }