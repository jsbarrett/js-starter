const { test } = Deno
import { assert } from './assert.js'
import { runSQL } from '../db-connection.js'

test('insert into todos', async () => {
  const sel = 'SELECT * FROM todos'
  const rowsBeforeInsert = ([ ...await runSQL({ sql: sel, values: [] })]).length

  const insert = 'INSERT INTO todos (name, complete) VALUES (?, ?)'
  const values = ['hello', 'world']
  await runSQL({ sql: insert, values })

  const rowsAfterInsert = ([ ...await runSQL({ sql: sel, values: [] })]).length

  console.log(rowsBeforeInsert, rowsAfterInsert)

  const rowsAdded = rowsAfterInsert - rowsBeforeInsert
  assert(rowsAdded === 1, `added ${rowsAdded} rows instead of 1`)
})

