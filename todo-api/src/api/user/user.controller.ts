import { Request, Response } from "express";
import { Controller } from "../../common/generics";
import { Service } from "../../common/generics";
import { User } from "../../core/user/user.entity";
import { UserService } from "../../core/user/user.service";

export class UserController extends Controller<User>{
    service: UserService
    constructor(service: UserService) {
        super(service)
        this.service = service

    }
    getUserTodos = async (req: Request, res: Response) =>{
        const data = await this.service.getUserTodos(req.session.user?.id as string)
        res.json({
            data
        })
    }
}