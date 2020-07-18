import { runSQL } from '../db-connection.ts'

class TodosModel {
  all = async () => {
    const sql = 'SELECT * FROM todos'
    const values: any = []
    const todos = await runSQL({ sql, values })
    return todos
  }

  create = async ({ name, complete }: any) => {
    const sql = 'INSERT INTO todos (name, complete) VALUES (?, ?)'
    const values: any = [name, complete]
    return runSQL({ sql, values })
  }

  delete = async (id: number|string) => {
    const sql = `DELETE FROM todos WHERE id = ?`
    const values: any = [id]
    return runSQL({ sql, values })
  }

  get = async (id: number|string) => {
    const sql = 'SELECT * FROM todos WHERE id = ?'
    const values: any = [id]
    return runSQL({ sql, values }).then((x: any) => x[0])
  }

  update = async (item: any) => {
    const sql = `UPDATE todos SET name = ?, complete = ? WHERE id = ?`
    const values: any = [item.name, item.complete, item.id]
    await runSQL({ sql, values })
  }
}

const todosModel = new TodosModel()

export { todosModel }
