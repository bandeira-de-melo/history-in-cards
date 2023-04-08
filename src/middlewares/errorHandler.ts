import {Request, Response, NextFunction} from 'express';
import { AppError } from "../protocols.js";
import httpStatus from 'http-status';

export function errorHandler(err: AppError, req: Request, res: Response, next: NextFunction){
  if(err.name === 'conflictError'){
    return res.status(httpStatus.CONFLICT).send({message: err.message})
  }
  
  if(err.name === 'NotFoundError'){
    return res.status(httpStatus.NOT_FOUND).send({message: err.message})
  }
}