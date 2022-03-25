import { NextFunction, Request, Response } from "express";
import { DataError } from "../errors/DataError";
import { NotFound } from "../errors/NotFoundError";

export const ErrorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) =>{
        res.status(err?.getStatusCode() || 500)
        res.send({message: err.message, code: err.getStatusCode(), stack: err.stack})
}