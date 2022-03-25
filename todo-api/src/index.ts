import express from 'express'
import 'express-async-errors'
import session from 'express-session'
import connectRedis from 'connect-redis'
import {createClient} from 'redis'
import cors from 'cors'
import morgan from 'morgan'
import router from './api'
import { ErrorMiddleware } from './common/middlewares'

// Extend interface to express session
declare module 'express-session' {
    interface SessionData {
      user: { id: string};
    }
  }

  // start express app 
const app = express()


// Session
let redisClient = createClient({
  legacyMode: true,
  url: process.env.REDIS_URL
})
const RedisStore = connectRedis(session)
redisClient.connect().catch(console.error)
app.use(
    session({
      store: new RedisStore({ client: redisClient } as any),
      saveUninitialized: false,
      secret: "keyboard cat",
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60, // 1s, 1min, 5min
        httpOnly: false,
        sameSite: false
      },
    })
  )
// MiddleWares
app.use(morgan('dev'))
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost" ],
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  credentials: true,
}))
app.use(express.json())

// Router
app.use('/api/v1',router)
app.get("/help", (req, res)=>{
  res.send("ok")
})
// Test Database connection 
// connect.sync({alter: true})

app.use(ErrorMiddleware)
// Start server
export const server = app.listen(5000, ()=>{
    console.log("Server Listen on port 5000")
})

export default app