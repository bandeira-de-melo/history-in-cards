import {Router} from 'express';
import {validateBody} from '../middlewares/validateSchema.js';
import momentsController from '../controllers/momentsController.js';
import momentSchema from '../schemas/momentSchema.js';

const momentsRouter = Router();

momentsRouter.post("/create", validateBody(momentSchema) , momentsController.createMoment)
momentsRouter.get("/getall", momentsController.getMoments)
momentsRouter.delete("/delete/:id")
momentsRouter.put("/update/:id")

export default momentsRouter;