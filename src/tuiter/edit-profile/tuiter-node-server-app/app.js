import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import tuitsController from './controllers/tuits/tuits-controller.js'
import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
tuitsController(app)
app.listen(4000)