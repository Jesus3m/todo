import { stub} from 'sinon'
import { TodoArrayDB } from '../../data/todo/datasources/todo.array'
import { TodoService } from './todo.service'


describe("Todo Service Unit Test", () => {

    it("create Todo", async () => {
        // Stub of repository and fake the method to probe
        const todoRepository = stub(new TodoArrayDB())
        // const todoRepository = { async save(data: any): Promise<any>{ return Promise.resolve([]) }}
        todoRepository.save = stub(new TodoArrayDB, 'save').callsFake(async (data) => {
            return data
        })
        // Init the service
        const todoService = new TodoService(todoRepository)
        const data = await todoService.create({description: "Todo Prueba", status: "PENDING", userId: "1", completeAt: new Date(), id: "123124", deletedAt: null})

        // Asserts
        expect(todoRepository.save.called).toBe(true)
        expect(todoRepository.save.getCall(0).args[0].description).toContain("Todo Prueba")
        expect(data.userId).toBe("1")
    })
    it("get Todos", async () =>{
        // Stub of repository and fake the method to probe
        const todoRepository = stub(new TodoArrayDB())
        todoRepository.getAll = stub(new TodoArrayDB, 'getAll').callsFake(async (data) => {
            return [{
                description: "Todo",
                status: "COMPLETE",
                userId: "1"
            }]
        })
        // Init the service
        const todoService = new TodoService(todoRepository)
        await todoService.findAll({})
        expect(todoRepository.getAll.called).toBe(true)
    })
    it("get Todos throwing error", async () =>{
        // Stub of repository and fake the method to probe
        const todoRepository = stub(new TodoArrayDB())
        todoRepository.getAll = stub(new TodoArrayDB, 'getAll').callsFake(async (data) => {
            return []
        })
        // Init the service
        const todoService = stub(new TodoService(todoRepository))

        await todoService.findAll({})
        expect(todoRepository.getAll.returnValues).toStrictEqual([])
        expect(todoService.findAll.alwaysThrew()).toBe(false)
    })
})