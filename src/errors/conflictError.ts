import { AppError } from "../protocols.js"

export default function conflictError(message: string): AppError {
  return {
    name: "conflictError",
    message,
  }
}

