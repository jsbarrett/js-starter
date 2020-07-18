import { baseHTML } from '../baseHTML.ts'

const Item = (x: any) => {
  return `
    <a href="/todos/${x.id}/edit">
      <li class="hover:bg-gray-100">
        ${x.id}, ${x.name}, ${x.complete}
      </li>
    </a>
  `
}

const todosAll = (xs: any) => {
  const content = `
    <a href="/todos/new">
      <button class="bg-blue-500 text-white px-8 py-2 rounded">
        Create New
      </button>
    </a>
    <h1 class="text-4xl">todos</h1>
    <ul>
      ${xs.map(Item).join('')}
    </ul>
  `
  return baseHTML(content)
}

export { todosAll }