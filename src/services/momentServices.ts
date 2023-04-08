import {Request, Response} from 'express';

import momentsRepository from "../repositories/momentRepository/momentsRepository.js";
import conflictError from '../errors/conflictError.js';

async function insertNewMoment(req: Request, res: Response) {
   const userName = await momentsRepository.getMomentByName();
   if(userName) throw conflictError
}

async function getAllMoments() {
  
}

async function getMomentById() {
  
}

async function updateMoment() {
  
}

async function deleteMoment() {
  
}

export default {
  insertNewMoment,
  getAllMoments,
  getMomentById,
  updateMoment,
  deleteMoment
}