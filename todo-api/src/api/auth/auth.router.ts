import { Router} from 'express'
import { AuthService } from '../../core/auth/auth.service'
import { UserData } from '../../data/user/user.db'
import { AuthController } from './auth.controller'

const userRepository = new UserData()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService)

const router = Router()

router
    .get("/me", authController.me)
    .get("/logout", authController.logout)
    .post("/login", authController.login)
    .post("/register", authController.register)

export default router