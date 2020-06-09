const path = require('path')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(path.resolve(__dirname, './db.sqlite'))

const runSQL = ({ sql, values }) => {
  return new Promise((resolve, reject) => {
    db.all(sql, values, (err, results) => {
      if (err) return reject(err)

      resolve(results)
    })
  })
}

module.exports = { runSQL }
