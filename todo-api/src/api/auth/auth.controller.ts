import { Request, Response } from "express";
import { Service } from "../../common/generics";
import { User } from "../../core/user/user.entity";
import { AuthService } from "../../core/auth/auth.service";

export class AuthController{
    service: AuthService
    constructor(service: AuthService) {
        this.service = service
    }
    login = async (req: Request, res: Response) =>{
        const data = await this.service.login(req.body.email, req.body.password)
        if(!data.id) {
            req.session.destroy(err => err)
        }
        req.session.user = data
        res.send({success: !!data.id, userId: data})
    }
    me = async (req: Request, res: Response) =>{
        const params = req.session?.user?.id ? {id: req.session?.user?.id} : undefined
        const data = params && await this.service.findOne(params)
        res.send({success: !!params, userId: req.session.user, data})
    }
    logout = async (req: Request, res: Response) =>{
        const data = await this.service.logout()
        req.session.destroy(err => err)
        res.send({success: true})
    }
    register = async (req: Request, res: Response) => {
        const data = await this.service.register(req.body)
        res.send({success: true, data})
    }
}