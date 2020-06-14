import { DB } from 'https://deno.land/x/sqlite/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'
import { dirname } from 'https://raw.githubusercontent.com/rsp/deno-dirname/master/mod.ts'

const migrationName = Deno.args[0]
const db = new DB('db.sqlite')

const sql = await Deno.readTextFile(path.resolve(dirname(import.meta), `../migrations/${migrationName}.sql`))

db.query(sql)
