import {Router} from 'express';
import validateSchema from '../middlewares/validateSchema.js';

const momentsRouter = Router();

momentsRouter.post("/create", validateSchema())
momentsRouter.get("/getall")
momentsRouter.delete("/delete/:id")
momentsRouter.put("/update/:id")

export default momentsRouter;