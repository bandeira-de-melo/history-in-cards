import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from 'joi'
import { invalidInputError } from "../errors/invalidInputError.js";

export function validateBody(schema) {
   
   return (req:Request, res:Response, next:NextFunction) => {
   
      const {error} = schema.validate(req.body, {abortEarly: false})

      if(!error) {
         next()
      } else {
         const errorList = error.details.map(detail => detail.message )
         throw invalidInputError(errorList)
      }   

   }
}


