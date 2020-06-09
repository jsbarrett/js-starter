const sqlite3 = require('sqlite3').verbose()
const path = require('path')
const db = new sqlite3.Database(path.resolve(__dirname, '../db.sqlite'))
const fs = require('fs').promises

async function main () {
  const migrationName = process.argv[2]
  const sql = await fs.readFile(path.resolve(__dirname, `../migrations/${migrationName}.sql`), 'utf8')

  db.serialize(() => {
    db.run(sql)
  })
}

main()
