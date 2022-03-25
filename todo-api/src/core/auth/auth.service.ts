import { DataError } from "../../common/errors/DataError";
import { Service } from "../../common/generics";
import { comparePasswords, encryptPassword } from "../../utils";
import {isEmpty} from 'lodash'
import { UserRepository } from "../user/user.repository";
import { User } from "../user/user.entity";
import { Forbidden } from "../../common/errors/ForbiddenError";
export class AuthService extends Service<User>{
    repository: UserRepository
    constructor(repository: UserRepository){
        super(repository)
        this.repository = repository
    }
    async login(email: string, password: string){
        const user = await this.repository.getOne({ email: email.toLowerCase() })
        if(isEmpty(user)) throw new Forbidden("User Cant auth")
        const isAuth = comparePasswords(password, user.password)
        if(!isAuth) throw new Forbidden("User Cant auth")
        return {
            id: user.id
        }
    }
    async logout(){
        return true
    }
    async register(data: User): Promise<User> {
        try {
            const userExist = await this.repository.getOne({email: data.email})
            if(!isEmpty(userExist)) throw new DataError("User exists")
            const password = encryptPassword(data.password)
            const email = data.email.toLowerCase()
            return await this.repository.save({...data, password})
            // return Promise.resolve(data)
        } catch (error: any) {
            console.log(error)
            throw new DataError(error.message || "User can't be created")
        }
    }
}