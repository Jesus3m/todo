import moment from 'moment'
import testSession from 'supertest-session'
import { TodoData } from '../../data/todo/todo.db'
import app, {server} from '../../index'
export const api = testSession(app)

const todoRepository = new TodoData()

const todo = {
    id: null,
    description: "Comprar cama",
    status: "PENDING",
    completeAt: moment(new Date()).add(5, 'hours').format("YYYY-MM-DD HH:mm:ss")
}

describe("Todo Routes",  ()=>{
  
    afterAll(async ()=>{
        await todoRepository.dropTable()
        server.close()
    })
    beforeEach(async ()=>{
        const data = await api.post("/api/v1/auth/login").send({
            "email": "admin@admin.com",
            "password": "1234"
        })
    })
    it("Get All without data saved", async () =>{
        const response = await api.get('/api/v1/todo')
        expect(response.body.code).toBe(404)
        expect(response.statusCode).toBe(404)
    })

    it("Create Todo Successfully", async () =>{
        // Create the todo
        const response = await api.post('/api/v1/todo').send({...todo, id: undefined})
        // Request to all data
        const data = await api.get('/api/v1/todo')
        todo.id = data.body[0].id
        // Expect success on creation
        expect(response.statusCode).toBe(200)
        expect(response.body.data.description).toBe("Comprar cama")
        // And the data have the new todo
        expect(data.body).toHaveLength(1)
        expect(data.body[0].status).toContain(todo.status)
        expect(data.statusCode).toBe(200)


    })
    it("Create Todo Wrong", async () =>{
        // Create the todo
        const response = await api.post('/api/v1/todo').send({})
        // Request to all data
        const data = await api.get('/api/v1/todo')

        // Expect fail on creation
        expect(response.statusCode).toBe(400)
        // And the data dont have the new todo
        expect(data.body).toHaveLength(1)
        expect(data.statusCode).toBe(200)
    })
    it("Get Todo by Id", async()=>{
        console.log(todo.id, 1231245214124)
        const response = await api.get(`/api/v1/todo/${todo.id}`)
        expect(response.body.description).toContain("Comprar cama")
    })
    it("Update Todo", async()=>{
        await api.put(`/api/v1/todo/${todo.id}`).send({...todo, description: "Comprar Colchon"})
        const response = await api.get(`/api/v1/todo/${todo.id}`)
        expect(response.body.description).toContain("Comprar Colchon")
    })
    it("Try Get Todo by Wrong ID", async()=>{
        const response = await api.get("/api/v1/todo/jasdahs")
        expect(response.body).not.toBe(undefined)
        expect(response.statusCode).toBe(404)
    })
    it("Delete Todo by ID", async()=>{
        await api.delete(`/api/v1/todo/${todo.id}`)
        const response = await api.delete(`/api/v1/todo/${todo.id}`)
        const data = await api.get("/api/v1/todo")

        expect(response.body).toBe(true)
        expect(response.statusCode).toBe(200)

        expect(data.body.code).toBe(404)
    })
})
