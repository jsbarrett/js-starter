const { todosAll } = require('../views/todos/todosAll')
const { todosNew } = require('../views/todos/todosNew')
const { todosEdit } = require('../views/todos/todosEdit')
const { todosModel } = require('../models/todosModel')

class TodosController {
  all = async (req, res) => {
    const todos = await todosModel.all()
    res.send(todosAll(todos))
  }

  new = async (req, res) => {
    res.send(todosNew())
  }

  create = async (req, res) => {
    await todosModel.create(req.body.name)
    res.redirect('/todos')
  }

  edit = async (req, res) => {
    const todo = await todosModel.get(req.params.id)
    res.send(todosEdit(todo))
  }

  update = async (req, res) => {
    const todo = {
      name: req.body.name,
      complete: req.body.complete || 0,
      id: req.params.id
    }
    try {
      await todosModel.update(todo)
      res.redirect(`/todos`)
    } catch (err) {
      console.error(err)
      res.status(500).send('oh noes there was a problem')
    }
  }

  delete = async (req, res) => {
    try {
      await todosModel.delete(req.params.id)
      res.redirect(`/todos`)
    } catch (err) {
      console.error(err)
      res.status(500).send('oh noes there was a problem')
    }
  }
}

const todosController = new TodosController()

module.exports = { todosController }