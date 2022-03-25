import testSession from 'supertest-session'
import app, {server} from '../../index'


export const api = testSession(app)
describe("Auth Routes",  ()=>{
    afterAll(()=>{
        server.close()
    })

    beforeEach(async ()=>{
        const data = await api.post("/api/v1/auth/login").send({
            "email": "admin@admin.com",
            "password": "1234"
        })
    })
    it("Login", async () =>{
        const response = await api.post("/api/v1/auth/login").send({
            "email": "admin@admin.com",
            "password": "1234"
        })
        console.log(response.body.data)
        expect(response.statusCode).toBe(200)
    })

    it("get Me session", async () =>{
        const response = await api.get("/api/v1/auth/me")
        expect(response.statusCode).toBe(200)
        expect(response.body.data.name).toBe("John")
    })

})
