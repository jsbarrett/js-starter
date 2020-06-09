const { baseHTML } = require('../baseHTML')

const item = x => {
  const color = (x.complete)
    ? 'text-green-500'
    : 'text-red-500'

  return `
    <a href="/todos/${x.id}/edit">
      <li class="${color} hover:bg-gray-100">
        ${x.name}
      </li>
    </a>
  `
}

const todosAll = xs => {
  const content = `
    <a href="/todos/new">
      <button class="bg-blue-500 text-white px-8 py-2 rounded">
        Create a new todo
      </button>
    </a>
    <h1 class="text-4xl">TODOS</h1>
    <ul>
      ${xs.map(item).join('')}
    </ul>
  `
  return baseHTML(content)
}

module.exports = { todosAll }
