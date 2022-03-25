import { NextFunction, Request, Response } from "express";
import { isEmpty } from "lodash";
import { Forbidden } from "../errors/ForbiddenError";

export const Authentication = (req: Request, res: Response, next: NextFunction) =>{
       if(isEmpty(req.session.user?.id)){
           throw new Forbidden("You cant access to this resource")
       }
       next()
}