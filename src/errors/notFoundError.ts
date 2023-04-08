import {AppError} from '../protocols.js'

export function notFoundError(): AppError {
  return {
    name: 'NotFoundError',
    message: 'No result for this search!',
  };
}