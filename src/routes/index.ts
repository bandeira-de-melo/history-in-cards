import {Router} from 'express'
import momentsRouter from './moments.routes.js'

const routes = Router()

routes.use(momentsRouter)

export default routes