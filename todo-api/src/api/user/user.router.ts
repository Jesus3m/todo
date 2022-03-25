import { Router} from 'express'
import { UserService } from '../../core/user/user.service'
import { UserData } from '../../data/user/user.db'
import { UserController } from './user.controller'

const userRepository = new UserData()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const router = Router()

router
    .get("/todo", userController.getUserTodos)
    .get("/:id", userController.getOne)
    .get("/", userController.getAll)
    .post("/", userController.create)
    .put("/:id", userController.update)
    .delete("/:id", userController.remove)

export default router