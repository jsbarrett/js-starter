const { baseHTML } = require('../baseHTML')

const testTableEdit = x => {
  const content = `
    <div class="flex">
      <form method="post" action="/testTable/${x.id}/update">
      <input class="px-4 border border-blue-500 py-2" name="foo" value="${x.foo}">      <input class="px-4 border border-blue-500 py-2" name="bar" value="${x.bar}">
        <button class="font-semibold border border-green-400 bg-green-400 text-white py-2 px-8" type="submit">Update</button>
      </form>
      <form method="post" action="/testTable/${x.id}/delete">
        <button class="font-semibold border border-red-400 bg-red-400 text-white py-2 px-8" type="submit">Delete</button>
      </form>
    </div>
  `

  return baseHTML(content)
}

module.exports = { testTableEdit }