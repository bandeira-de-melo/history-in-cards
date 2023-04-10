import Joi from 'joi';
import { ObjectSchema } from 'joi'

export interface IMoment {
  title: string;
  century: number;
  location: string;
  description: string;
  thumbnail_url: string;
  author: string;
}
const momentSchema: ObjectSchema= Joi.object({
  title: Joi.string().min(2).required(),
  century: Joi.number().min(1).required(),
  location: Joi.string().required(),
  description: Joi.string().min(8).required(),
  thumbnail_url: Joi.string().uri().required(),
  author: Joi.string().min(2).required()
});

export default {
  momentSchema
}