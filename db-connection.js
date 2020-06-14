import * as path from 'https://deno.land/std/path/mod.ts'
import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { dirname } from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts'

const db = new DB(path.resolve(dirname(import.meta), './db.sqlite'))

const runSQL = ({ sql, values }) => new Promise((resolve, reject) => {
  try {
    const results = db.query(sql, values)
    resolve(results)
  } catch (err) {
    reject(err)
  }
})

export { runSQL }
