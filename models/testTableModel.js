const { runSQL } = require('../db-connection')

class TestTableModel {
  all = async () => {
    const sql = 'SELECT * FROM testTable'
    const values = []
    const testTable = await runSQL({ sql, values })
    return testTable
  }

  create = async (foo, bar) => {
    const sql = 'INSERT INTO testTable (foo, bar) VALUES (?, ?)'
    const values = [foo, bar]
    return runSQL({ sql, values })
  }

  delete = async (id) => {
    const sql = `DELETE FROM testTable WHERE id = ?`
    const values = [id]
    return runSQL({ sql, values })
  }

  get = async (id) => {
    const sql = 'SELECT * FROM testTable WHERE id = ?'
    const values = [id]
    return runSQL({ sql, values }).then(x => x[0])
  }

  update = async (item) => {
    const sql = `UPDATE testTable SET foo = ?, bar = ? WHERE id = ?`
    const values = [item.foo, item.bar, item.id]
    await runSQL({ sql, values })
  }
}

const testTableModel = new TestTableModel()

module.exports = { testTableModel }