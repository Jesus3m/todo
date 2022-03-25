import { Repository } from "../../common/generics";
import { Todo } from "./todo.entity";

export interface TodoRepository extends Repository<Todo>{
}