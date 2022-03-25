import { Repository } from "../../common/generics";
import { User } from "./user.entity";

export interface UserRepository extends Repository<User>{
    getUserTodos(id: string): Promise<any[]>
}