import {Request, Response} from 'express';
import { Moment } from '../protocols.js';
import httpStatus from 'http-status';
import momentServices from '../services/momentServices.js';

async function createMoment(req: Request, res: Response){
  const moment = req.body as Moment;
  await momentServices.insertMomentService(moment)
  return res.status(httpStatus.CREATED).send("Moment Created") 
}

async function getMoments(req: Request, res: Response){
  const momentsList = await momentServices.getAllMoments()
  res.send(momentsList)
}

async function updateMoment(req: Request, res: Response){
  
}

async function deleteMoment(req: Request, res: Response){

}

export default {
  createMoment,
  getMoments,
  updateMoment,

}