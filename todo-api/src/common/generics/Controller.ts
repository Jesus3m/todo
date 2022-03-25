import { Request, Response } from "express";
import { Service } from "./Service";

export class Controller<T>{
    service: Service<T>
    constructor(service: Service<T>){
        this.service = service
    }
     getAll = async (req: Request, res: Response) =>{
        const data = await this.service.findAll(req.query)
        res.json(data)
    }
    getOne = async (req: Request, res: Response) =>{
        const data = await this.service.findOne({...req.query, id: req.params.id})
        res.json(data)
    }
    create = async (req: Request, res: Response) =>{
        const data = await this.service.create(req.body)
        res.json(data)
    }
    update = async (req: Request, res: Response) =>{
        const data = await this.service.update(req.params.id, req.body)
        res.json(data)
    }
    remove = async (req: Request, res: Response) =>{
        const data = await this.service.remove(req.params.id)
        res.json(data)
    }
}