const { baseHTML } = require('../baseHTML')

const testTableNew = () => {
  const content = `
    <form method="post" action="/testTable/create">
      <input class="px-4 border border-blue-500 py-2" name="foo">
      <input class="px-4 border border-blue-500 py-2" name="bar">
      <button class="font-semibold border border-green-400 bg-green-400 text-white py-2 px-8" type="submit">Create</button>
    </form>
  `

  return baseHTML(content)
}

module.exports = { testTableNew }