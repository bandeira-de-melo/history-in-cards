import dbConnection from "../../database/database.js"
import conflictError from "../../errors/conflictError.js"
import { Moment } from "../../protocols.js"

async function getMomentByTitle(momentTitle: string){
  try {
    const result = await dbConnection.query(`SELECT * FROM moments WHERE title=$1`, [momentTitle])
    return 
  } catch (error) {
    return error.message
  }
}
async function create(moment: Moment) {
  try {
    return await dbConnection.query(`
    INSERT INTO moments(title, century, location, description, thumbnail_url, author)
     VALUES($1, $2, $3, $4, $5, $6)`, 
     [moment.title, moment.century, moment.location, moment.description, moment.thumbnail_url, moment.author])
  } catch (error) {
    return error.message
  }  
}

async function getAllMoments(){
    return await dbConnection.query(`SELECT * FROM moments;`)
}


export default {
  getMomentByTitle,
  create,
  getAllMoments
}