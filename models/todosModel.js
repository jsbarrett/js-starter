const { runSQL } = require('../db-connection')

class TodosModel {
  all = async () => {
    const sql = 'SELECT * FROM todos'
    const values = []
    const todos = await runSQL({ sql, values })
    return todos
  }

  create = async (name) => {
    const sql = 'INSERT INTO todos (name, complete) VALUES (?,?)'
    const values = [name, 0]
    return runSQL({ sql, values })
  }

  delete = async (id) => {
    const sql = `DELETE FROM todos WHERE id = ?`
    const values = [id]
    return runSQL({ sql, values })
  }

  get = async (id) => {
    const sql = 'SELECT * FROM todos WHERE id = ?'
    const values = [id]
    return runSQL({ sql, values }).then(x => x[0])
  }

  update = async (todo) => {
    const sql = `UPDATE todos SET name = ?, complete = ? WHERE id = ?`
    const values = [todo.name, todo.complete, todo.id]
    await runSQL({ sql, values })
  }
}

const todosModel = new TodosModel()

module.exports = { todosModel }