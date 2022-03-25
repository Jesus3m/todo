import { Repository } from "./Repository";
import {isEmpty} from 'lodash'
import { NotFound } from "../errors/NotFoundError";
import { DataError } from "../errors/DataError";
export class Service<T> {
    repository: Repository<T>
        constructor(repository: Repository<T>){
        this.repository = repository
    }
    async findAll(params: any){
        const data = await this.repository.getAll(params)
        if(isEmpty(data)) throw new NotFound("Resource not found")
        return data
    }

    async findOne(params: any){
        const data = await this.repository.getOne(params)
        if(isEmpty(data)) throw new NotFound("Resource not found")
        return data
    }

    async create(data: T){
        try {
            if(data)
            return await this.repository.save({...data})
        } catch (error) {
            throw new DataError("Error creating or bad request")
        }
    }

    async update(id: string, data: T){
        try {
            return await this.repository.update(id, data)
        } catch (error) {
            throw new DataError("Error updating or bad request")
        }
    }

    async remove(id: string){
        try {
            return await this.repository.remove(id)
        } catch (error) {
            throw new DataError("Error deleting or bad request")
        }
    }
}