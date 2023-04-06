import {Router} from 'express';

const momentsRouter = Router();

momentsRouter.post("/create")
momentsRouter.get("/getall")
momentsRouter.delete("/delete/:id")
momentsRouter.put("/update/:id")

export default momentsRouter;