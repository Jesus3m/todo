import {Request, Response, Router} from 'express'
import userRouter from './user/user.router'
import authRouter from './auth/auth.router'
import todoRouter from './todo/todo.router'
import { Authentication } from '../common/middlewares/Authentication'
const router = Router()

router.get("/", (req: Request, res: Response)=>{
    res.send("Welcome to Todo API")
})
router.use('/user', [Authentication], userRouter)
router.use('/auth', authRouter)
router.use('/todo', [Authentication], todoRouter)

export default router