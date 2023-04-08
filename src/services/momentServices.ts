import momentsRepository from "../repositories/momentRepository/momentsRepository.js";
import conflictError from '../errors/conflictError.js';
import { Moment } from '../protocols.js';

async function insertMomentService(moment: Moment) {
  const userName = await momentsRepository.getMomentByTitle(moment.title);
  if(userName) throw conflictError("A moment with this title already exists")
  momentsRepository.create(moment)
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
  insertMomentService,
  getAllMoments,
  getMomentById,
  updateMoment,
  deleteMoment
}