import { NextFunction, Request, Response } from "express"
import { Moment } from "../protocols.js"

async function validateSchema(schema) {
   return async (res:Response, req:Request, next:NextFunction)=>{
      const body = req.body

      const {error, value} = await schema
      .validate(body, {abortEarly: false})

      if(error) return res.send(error.details.map(error => error.message))

      res.locals.data = value
      
      next()
   }
}

export default {
  validateSchema
}