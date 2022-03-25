import { DataError } from "../../common/errors/DataError";
import { Service } from "../../common/generics";
import { encryptPassword } from "../../utils";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import {isEmpty} from 'lodash'
export class UserService extends Service<User>{
    repository: UserRepository
    constructor(repository: UserRepository){
        super(repository)
        this.repository = repository
    }
    async create(data: User): Promise<User> {
        try {
            const userExist = await this.repository.getOne({email: data.email})
            if(!isEmpty(userExist)) throw new DataError("User exists")
            const password = encryptPassword(data.password)
            return await this.repository.save({...data, password})
            // return Promise.resolve(data)
        } catch (error: any) {
            throw new DataError(error.message || "User can't be created")
        }
    }

    async getUserTodos(id: string){
        return await this.repository.getUserTodos(id)
    }
}