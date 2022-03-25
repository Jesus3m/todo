import { DataError } from "../../common/errors/DataError";
import { Service } from "../../common/generics";
import { encryptPassword } from "../../utils";
import { Todo } from "./todo.entity";
import { TodoRepository } from "./todo.repository";
import {isEmpty} from 'lodash'
export class TodoService extends Service<Todo>{
    repository: TodoRepository
    constructor(repository: TodoRepository){
        super(repository)
        this.repository = repository
    }
    async create(data: Todo): Promise<Todo> {
        try {
            return await this.repository.save({...data})
            // return Promise.resolve(data)
        } catch (error: any) {
            console.log(error)
            throw new DataError(error.message || "Todo can't be created")
        }
    }
}