import conflictError from "../../errors/conflictError.js"
import { Moment } from "../../protocols.js"

async function getMomentByTitle(momentTitle: string){
  try {
    const result = await asdf
    return result
  } catch (error) {
    return error.message
  }
}
async function create(moment: Moment) {
  try {
    return await
  } catch (error) {
    return error.message
  }  
}


export default {
  getMomentByTitle,
  create
}