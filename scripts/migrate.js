import { DB } from 'https://deno.land/x/sqlite/mod.ts'

const migrationName = Deno.args[0]
const db = new DB('db.sqlite')

const sql = await Deno.readTextFile(`./migrations/${migrationName}.sql`)

db.query(sql)
