import { Router} from 'express'
import { TodoService } from '../../core/todo/todo.service'
import { TodoData } from '../../data/todo/todo.db'
import { TodoController } from './todo.controller'

const todoRepository = new TodoData()
const todoService = new TodoService(todoRepository)
const todoController = new TodoController(todoService)

const router = Router()

router
    .get("/:id", todoController.getOne)
    .get("/", todoController.getAll)
    .post("/", todoController.create)
    .put("/:id", todoController.update)
    .delete("/:id", todoController.remove)

export default router