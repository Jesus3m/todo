import { Request, Response } from "express";
import { DataError } from "../../common/errors/DataError";
import { Controller } from "../../common/generics";
import { Service } from "../../common/generics";
import { Todo } from "../../core/todo/todo.entity";

export class TodoController extends Controller<Todo>{
    constructor(service: Service<Todo>) {
        super(service)
    }
     create = async (req: Request, res: Response) =>{
         if(!req.body.description) throw new DataError("Cant be create empty todo")
        const data = await this.service.create({...req.body, userId: req.session.user && req.session.user.id})
        res.json({data})
    }
}