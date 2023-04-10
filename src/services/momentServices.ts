import momentsRepository from "../repositories/momentRepository/momentsRepository.js";
import conflictError from '../errors/conflictError.js';
import { Moment } from '../protocols.js';
import { errorHandler } from "../middlewares/errorHandler.js";

async function insertMomentService(moment: Moment) {
  try {
    const {rows: [title]} = await momentsRepository.getMomentByTitle(moment.title);
    if(title) 
    await momentsRepository.create(moment)
  } catch (error) {
    throw error.message
  }
}

async function getAllMoments() {
  try {
    const momentsList = await momentsRepository.getAllMoments();
    return momentsList.rows
  } catch (error) {
    return error.message
  }
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