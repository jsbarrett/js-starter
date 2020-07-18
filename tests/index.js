const { test } = Deno
import { assert } from './assert.js'

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
const ping = async () => {
  return fetch('http://127.0.0.1:3000/')
    .then()
    .catch(err => wait(10).then(ping))
}

await ping()
await wait(0) // just need to let the event loop go round before continuing

test('get /todos says todos all', async () => {
  await fetch('http://127.0.0.1:3000/todos')
    .then(x => x.text())
    .then(x => {
      assert(x === 'todos all', x)
    })
})

// test('get /todos/new says you are being redirected', async () => {
//   // await fetch('http://127.0.0.1:3000/todos/new')
//   //   .then(x => x.text())
//   //   .then(x => {
//   //     console.log(x)
//   //     assert(x === 'you are being redirected', x)
//   //   })
// })

test('post /todos/create says todos create', async () => {
  await fetch('http://127.0.0.1:3000/todos/create', { method: 'POST' })
    .then(x => x.text())
    .then(x => {
      assert(x === 'todos create', x)
    })
})

test('get /todos/123/edit says todo item 123 edit', async () => {
  await fetch('http://127.0.0.1:3000/todos/123/edit')
    .then(x => x.text())
    .then(x => {
      assert(x === 'todo item 123 edit', x)
    })
})

test('post /todos/123/update says UPDATING TODO 123', async () => {
  await fetch('http://127.0.0.1:3000/todos/123/update', { method: 'POST' })
    .then(x => x.text())
    .then(x => {
      assert(x === 'UPDATING TODO 123', x)
    })
})

test('post /todos/123/delete says todo 123 delete', async () => {
  await fetch('http://127.0.0.1:3000/todos/123/delete', { method: 'POST' })
    .then(x => x.text())
    .then(x => {
      assert(x === 'todo 123 delete', x)
    })
})

test('get root url says hello', async () => {
  await fetch('http://127.0.0.1:3000/')
    .then(x => x.text())
    .then(x => {
      assert(x === 'hello', x)
    })
})

